const express = require('express')
const router = express.Router()
const extracontroller = require('../controllers/ekstras')

//endpoint, function, perintah
router.get('/extras', extracontroller.show)

router.get('/extra/:id', extracontroller.select)

  router.post('/extra', extracontroller.send)

  router.put('/extra/:id', extracontroller.set)

  router.delete('/extra/:id', extracontroller.steal)

  module.exports = router