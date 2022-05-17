const Pixel = require('../models/Pixels')
const PixelController = {
    async Create  (req, res) {
        try {
            const pixel = await Pixel.create(req.body)
            res.status(200).json({ pixel })
        } catch (err) {
            res.status(400).json({ error: 'Registration failed' })
        }
    },
    async FindAll  (req, res) {
        try {
            const pixels = await Pixel.find()
            res.status(200).json({ pixels })
        } catch (err) {
            res.status(400).json({ error: err })
        }
    },
    async FindOptions  (req, res) {
        const character = req.body.character
        const map = req.body.map
        const side = req.body.side
        const bomb = req.body.bomb
        try {
            // eslint-disable-next-line object-shorthand
            const pixels = await Pixel.find({ character: character, map: map, side: side, bomb: bomb })
            console.log(character)
            if (pixels.length === 0) {
                res.status(200).json({ error: 'Not found' })
            } else {
                res.status(200).json({ pixels })
            }
        } catch (err) {
            res.status(400).json({ error: err })
        }
    }
}
module.exports = PixelController
