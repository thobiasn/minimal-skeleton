// Dependencies
var express = require('express'),
	router = express.Router(),
	path = '../controllers/';

// Controllers
var indexController = require(path+'indexController');

// Models
var entry = require('../models/entry');

// Routes
router.route('/').get(indexController.index);

entry.methods(['get', 'put', 'post', 'delete']);
entry.register(router, '/entries');

// Export the router object
// Apparently you can simply export the object itself and the changes will occur. Is the object static and so, being changed in this file, which then returns the modified object and changes it in the app js file?
module.exports = router;