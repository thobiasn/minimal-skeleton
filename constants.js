
'use strict'

const path = require('path')

// You need to have one center file that handle configuration
// as the only source of truth for your whole application.
// Never hardcode thing everywhere your application.
const constants = {
  NODE_ENV: 'development',
  port: process.env.PORT || 3000,
  views_path: path.resolve(__dirname, 'views'),
  static_path: path.resolve(__dirname, 'assets'),
  API_URL: 'http://localhost:3000',
  MONGODB_URI: 'mongodb://localhost/minimal-framework'
}

module.exports = Object.assign(process.env, constants)
