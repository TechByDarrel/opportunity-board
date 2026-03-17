const express = require("express");
const {
  getAllOpportunities,
  createOpportunity,
  updateOpportunity,
  deleteOpportunity,
} = require("../controllers/opportunityController");
const { protect } = require("../middleware/authMiddleware");
const { adminOnly } = require("../middleware/adminMiddleware");

const router = express.Router();

router.get("/", getAllOpportunities);

router.post("/", protect, adminOnly, createOpportunity);
router.put("/:id", protect, adminOnly, updateOpportunity);
router.delete("/:id", protect, adminOnly, deleteOpportunity);

module.exports = router;