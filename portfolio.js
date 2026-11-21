const express = require("express");
const router = express.Router();
const portfolioController = require("../controllers/portfolioController");

router.post("/save", portfolioController.savePortfolio);

module.exports = router;
