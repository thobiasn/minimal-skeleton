// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var entrySchema = new mongoose.Schema({
	name: String,
	value: Number
});

// Return the model as a restful model to allow it being used as a route.
module.exports = restful.model('entries', entrySchema);