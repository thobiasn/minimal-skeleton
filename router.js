
'use strict'

const express = require('express')
const router = express.Router()

// require our controllers
const EntryController = require('./controllers/EntryController')

// require our models that node-resful will transform
var entryModel = require('./models/Entry')

// Routes - Define routes here
router.get('/entries', EntryController.get)

// you can also for route that need a little amount of code,
// declare the middleware directly here
router.get('/', (req, res, next) => {
  return res.render('index')
})


// Configure the endpoint that node-restful will expose
entryModel.methods(['get', 'put', 'post', 'delete'])
// and add it into express
entryModel.register(router, '/api/entries')

// Export the router object
module.exports = router
