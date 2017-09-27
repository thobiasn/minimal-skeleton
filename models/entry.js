'use strict'

// Dependencies
const restful = require('node-restful')
const mongoose = restful.mongoose

// Schema
const entrySchema = new mongoose.Schema({
  name: String,
  value: Number
})

// Return the model as a restful model to allow it being used as a route.
module.exports = restful.model('entries', entrySchema)