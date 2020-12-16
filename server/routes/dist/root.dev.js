"use strict";

var express = require('express');

var router = express.Router(); //import controllers

var rootControl = require('../controllers/rootController');

router.use('/', rootControl.getRoot);
module.exports = router;