// Dependencies
var express = require('express'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	request = require('request'),
	traceur = require('traceur'),
	router = require('./routes/routes');

// Istantiate core variables
var app = express(),
	server = require('http').createServer(app);

// Set bodyParser settings for restful api
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// Connect to the database
mongoose.connect('mongodb://localhost/skabelonen');

// Set public folder at root folder
app.use(express.static(__dirname + '/public'));

// Set view engine to ejs.
app.set('view engine', 'ejs');

server.listen(process.env.PORT || 3000);
console.log('Server listening on port 3000..');

// Add our router file to our stack
app.use(router);