'use strict';

/**
 * Module dependencies.
 */
 var express = require('express');
 var mongoose = require('mongoose');
 var baucis = require('baucis');
 var config = require('./config/config.js');
 var dbSchemaDesc = require('./config/dbSchemaDesc.js');
 var swagger = require('baucis-swagger');
 var testData = require('./test/testData.json');

// Connect to the Mongo instance
mongoose.connect(config.mongo.uri);

mongoose.connection.on('connected', function() {
	console.log('Mongoose connected to ' + config.mongo.uri);
});
mongoose.connection.on('error', function(err) {
	console.log('Mongoose (' + config.mongo.uri + ') connection error: ' + err);
});
mongoose.connection.on('disconnected', function() {
	console.log('Mongoose (' + config.mongo.uri + ') disconnected');
});

process.on('SIGINT', function() {
	mongoose.connection.close(function() {
		console.log('Mongoose (' + config.mongo.uri + ') disconnected through app termination');
		process.exit(0);
	});
});

// create a mongoose schema
var dbSchema = new mongoose.Schema(dbSchemaDesc);

// optional Mongoose middleware
dbSchema.pre('save', function (next) {
	console.log('A ' + config.itemName + ' was saved to Mongo: %s.', this.get('comment'));
	next();
});

// register the schema
mongoose.model(config.itemName, dbSchema);

// Clear the database of old data
mongoose.model(config.itemName).remove(function (error) {
	if (error) throw error;

	// Put the test data into the database
	// NOT SUITABLE FOR PRODUCTIVE ENVIRONMENTS !
//	mongoose.model(config.itemName).create(testData, function (error) {
//	  	if (error) throw error;

		// Create the API routes
		var controller = baucis.rest(config.itemName);
		controller.get('/readme', function (request, response, next) {
			// Send a readme document about the resource 
			next();
		});
		/*
		controller.request(function (request, response, next) {
			 if (request.isAuthenticated()) return next();
			 return response.send(401);
		});
		*/

		// Create the app and listen for API requests
		var app = express();
		app.all('/*', function(req, res, next) {
			res.header("Access-Control-Allow-Origin", "http://localhost:9000");
			res.header("Access-Control-Allow-Credentials", "true");
			res.header("Access-Control-Allow-Headers", 'Authorization, Origin, Content-Type, X-Requested-With, Accept');
			res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
			next();
		});
		app.use('/api', baucis());
		app.listen(config.port);

		console.log('server listening on port ' + config.port + '...');
//	});
});


