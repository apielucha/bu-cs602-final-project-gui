'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  GUI_URL: '"http://localhost:8080"',
  API_URL: '"http://localhost:8081"'
})
