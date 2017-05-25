// Dependencies
var express = require('express'),
	router = express.Router(),
	path = '../controllers/';

// Controllers - Load controllers here
var indexController = require(path+'indexController');

// Models - Load models here
var entryModel = require('../models/entry');

// Routes - Define routes here
router.route('/').get(indexController.index);

//Route for our rest api. First set the methods that should be available. Secondly register that new router
entryModel.methods(['get', 'put', 'post', 'delete']);
entryModel.register(router, '/entries');

// Export the router object
// Apparently you can simply export the object itself and the changes will occur. Is the object static and so, being changed in this file, which then returns the modified object and changes it in the app js file?
module.exports = router;
