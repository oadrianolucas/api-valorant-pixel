const router = require('express').Router()
const pixelController = require('./controllers/PixelController')
router.get('/', (req, res) => {
  res.send('api-pixel')
})
router.post('/v1/create', pixelController.Create)
router.post('/v1/pixels/search', pixelController.FindOptions)
router.get('/v1/pixels', pixelController.FindAll)

module.exports = router
