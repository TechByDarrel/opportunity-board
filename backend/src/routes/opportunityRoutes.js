const express = require("express");
const { getAllOpportunities } = require("../controllers/opportunityController");

const router = express.Router();

router.get("/", getAllOpportunities);

module.exports = router;