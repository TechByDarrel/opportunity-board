const express = require("express");
const {
  saveOpportunity,
  unsaveOpportunity,
  getSavedOpportunities,
} = require("../controllers/savedOpportunityController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", protect, getSavedOpportunities);
router.post("/:opportunityId", protect, saveOpportunity);
router.delete("/:opportunityId", protect, unsaveOpportunity);

module.exports = router;