const api = require('../routes/index')
const bodyParser = require('body-parser')
const config = require('../config')
const cookieParser = require('cookie-parser')
const express = require('express')
const logger = require('morgan')

const expressLoader = app => {
  app.set('port', config.PORT)
  app.use(logger('dev'))
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(cookieParser())
  app.use('/api', api)
}

module.exports = expressLoader
