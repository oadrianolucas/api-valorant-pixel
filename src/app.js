const express = require('express')
const app = express()
const routes = require('./routes')
require('dotenv').config()

app.set('port', process.env.PORT || 3001)
app.use('/', routes)

module.exports = app
