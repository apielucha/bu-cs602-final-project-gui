'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  GUI_URL: '"http://localhost:8443"',
  API_URL: '"https://localhost:8444"'
})
