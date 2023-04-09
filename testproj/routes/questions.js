const express = require('express')
const router = express.Router()

const controller = require('../controller/controller')

router.get('/', controller.showTest(req, res))

module.exports = router;
