# usersSvc - Users Service

This project implements an registry of registered users. It is built using [baucis](https://github.com/wprl/baucis) 
and consists of 
- a MongoDB database (defined by a Mongoose schema) that is populated with some test data
- a Node.js/Express server application that is generated by Baucis based on the Mongoose schema.
- a REST interface 'apps' that serves the backend application (also generated by Baucis)
- a browsable REST API documentation generated by Swagger

## Prerequisites:
- Node.js / npm
- MongoDB needs to run on default port 27017 (in dev and test environment)

## Assumptions:
- application will be served on port 3335 (in dev and test environment)
- Application and MongoDB ports can be configured in config/config.js.

## Installation:
    git clone https://github.com/DigiKMU/usersSvc.git
    cd usersSvc
    npm install
    node app

## Configuration
- config/config.js      configuration parameters 
- config/*SchemaDesc.js Mongoose schemas
- test/testdata.json    test data in JSON format

## Usage:
When the server is running, the application can be called via HTTP requests, e.g:

    http://localhost:[port]/api/users
    http://localhost:[port]/api/users?conditions={ "name": "test" }
    http://localhost:[port]/api/users?conditions={ "desc": { "$regex": "est" } }
    http://localhost:[port]/api/users?select=_id
    http://localhost:[port]/api/users/<_id>

Check out POST, PUT, HEAD, and DELETE requests as well…

This can be done by 
- manually calling the above URL's from within a browser
- command line tools such as curl
- programmatically, e.g. from within a JavaScript application or any other web client calling the REST interface
- test scripts

# REST API documentation

Using Swagger, a browsable description of the REST API can be generated.

## Installation
download the [swagger-ui](https://github.com/wordnik/swagger-ui) client.

    git clone git@github.com:wordnik/swagger-ui.git
    open swagger-ui/dist/index.html

call the API:

    http://localhost:3335/api/api-docs
    http://localhost:3335/api/api-docs/users

