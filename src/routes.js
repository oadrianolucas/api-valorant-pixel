const router = require('express').Router()

router.get('/', (req, res) => {
  res.send('api-pixel')
})

module.exports = router
