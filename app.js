'use strict'

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const router = require('./router')
const constants = require('./constants')

// Istantiate core variables
const app = express()
const server = require('http').createServer(app)

// register global middleware before registering the router
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(constants.static_path))

// Connect to the database
mongoose.connect('mongodb://localhost/minimal-framework')

// Set view engine to ejs.
app.set('view engine', 'ejs')

server.listen(constants.port, (err) => {
  if (err) {
    console.error(`Failed to bind http server on port ${constants.port}`)
    console.error(err)
    process.exit(1)
  }
  console.log(`HTTP Server is listening on port ${constants.port}`)
})

// Add our router file to our stack
app.use(router)
