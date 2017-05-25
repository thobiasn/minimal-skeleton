
'use strict'

const restful = require('node-restful')
const mongoose = restful.mongoose

// register the schema of the model
const entrySchema = new mongoose.Schema({
  name: String,
  value: Number
})

// and export the schema so it can be retrieved by the controller for example
module.exports = restful.model('entries', entrySchema)
