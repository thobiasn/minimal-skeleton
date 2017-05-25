'use strict'

// Dependencies
const express = require('express')
const router = express.Router()
const conf = require('./conf')

// Controllers - Load controllers here
const EntryController = require('./controllers/EntryController')

// Models - Load models here
var entryModel = require('./models/Entry')

// Routes - Define routes here
router.get('/entries', EntryController.get)

router.get('/', (req, res, next) => {
  return res.render('index')
})

// Configure the endpoint that node-restful will expose
entryModel.methods(['get', 'put', 'post', 'delete'])
// and add it into express
entryModel.register(router, '/api/entries')

// Export the router object
module.exports = router
