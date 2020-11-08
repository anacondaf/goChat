const express = require('express')
const router = express.Router()

//import controllers
const rootControl = require('../controllers/rootController')

router.use('/', rootControl.getRoot)

module.exports = router