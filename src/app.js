const express = require('express')
const app = express()
const routes = require('./routes')
const cors = require('cors')
require('dotenv').config()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.set('port', process.env.PORT || 3001)
app.use('/', routes)

module.exports = app
