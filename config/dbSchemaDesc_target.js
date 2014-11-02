'use strict';
var mongoose = require('mongoose');
var profileSchema = new mongoose.Schema(require('./profileSchemaDesc.js'));

module.exports = 
{
	tid: {
		type: String,
		trim: true,
		required: true,
	},
	userid: {
		type: String,
		trim: true,
		required: true,
		unique: true
	},
	name: {
		type: String,
		trim: true,
		required: true,
	},
	email: {
		type: String,
		trim: true,
		required: true
	},
	phonenr: {
		type: String,
		trim: true,
		required: false
	},
	avatar: {
		type: binary,
		required: false
	},
	hashedPassword: {
		type: String,
		trim: true,
		required: true
	},
	role: {
		type: String,
		trim: true,
		required: true,
		default: 'user'
	}
	facebook: {},
	twitter: {},
	google: {},
	github: {}
	profile: [profileSchema]
};

