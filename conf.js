'use strict'

const path = require('path')

// Center file for constant variables
const constants = {
  NODE_ENV: 'development',
  port: process.env.PORT || 3000,
  views_path: path.resolve(__dirname, 'views'),
  models_path: path.resolve(__dirname, 'models'),
  controllers_path: path.resolve(__dirname, 'controllers'),
  static_path: path.resolve(__dirname, 'assets'),
  API_URL: 'http://localhost:3000',
  MONGODB_URI: 'mongodb://localhost/minimal-skeleton'
}

module.exports = Object.assign(process.env, constants)
