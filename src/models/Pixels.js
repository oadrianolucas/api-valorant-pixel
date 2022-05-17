const mongoose = require('../database')
const PixelSchema = new mongoose.Schema({
    character: {
        type: String,
        lowercase: true
    },
    map: {
        type: String,
        lowercase: true
    },
    side: {
        type: Boolean,
        lowercase: true
    },
    bomb: {
        type: String,
        lowercase: true
    },
    link: {
        type: String
    }
})
const Pixel = mongoose.model('Pixel', PixelSchema)
module.exports = Pixel
