const express = require("express");
const router = express.Router();

//import controllers
const rootController = require("../controllers/rootController");

router.post("/", rootController.authUser);

module.exports = router;
