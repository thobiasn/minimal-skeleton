// Dependencies
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const router = require('./router')
const conf = require('./conf')

// Istantiate constant core variables
const app = express()
const server = require('http').createServer(app)

// register global middleware before registering the router
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

// Connect to the database
mongoose.connect(conf.MONGODB_URI)

// Set view engine to ejs.
app.set('view engine', 'ejs')

// Set static (public) path
app.use(express.static(conf.static_path))

server.listen(conf.port, (err) => {
 	if (err) {
   console.error(`Failed to bind http server on port ${conf.port}`)
   console.error(err)
   process.exit(1)
 }
  console.log(`HTTP Server is listening on port ${conf.port}`)
})

// Add our router file to our stack
app.use(router)
