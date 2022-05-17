const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/pixelvalorant')
mongoose.Promise = global.Promise
module.exports = mongoose
