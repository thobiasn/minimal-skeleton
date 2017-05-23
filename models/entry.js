// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var entrySchema = new mongoose.Schema({
	name: String,
	value: Number
});

// Return model
module.exports = restful.model('entries', entrySchema);