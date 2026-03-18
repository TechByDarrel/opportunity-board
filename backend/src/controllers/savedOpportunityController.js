const pool = require("../db/db");

const saveOpportunity = async (req, res) => {
  try {
    const userId = req.user.id;
    const { opportunityId } = req.params;

    const result = await pool.query(
      `INSERT INTO saved_opportunities (user_id, opportunity_id)
       VALUES ($1, $2)
       ON CONFLICT (user_id, opportunity_id) DO NOTHING
       RETURNING *`,
      [userId, opportunityId]
    );

    if (result.rows.length === 0) {
      return res.status(200).json({
        success: true,
        message: "Opportunity already saved",
      });
    }

    res.status(201).json({
      success: true,
      message: "Opportunity saved successfully",
      saved: result.rows[0],
    });
  } catch (error) {
    console.error("Save opportunity error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to save opportunity",
    });
  }
};

const unsaveOpportunity = async (req, res) => {
  try {
    const userId = req.user.id;
    const { opportunityId } = req.params;

    await pool.query(
      "DELETE FROM saved_opportunities WHERE user_id = $1 AND opportunity_id = $2",
      [userId, opportunityId]
    );

    res.json({
      success: true,
      message: "Opportunity removed from saved list",
    });
  } catch (error) {
    console.error("Unsave opportunity error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to remove saved opportunity",
    });
  }
};

const getSavedOpportunities = async (req, res) => {
  try {
    const userId = req.user.id;

    const result = await pool.query(
      `SELECT o.*
       FROM saved_opportunities s
       JOIN opportunities o ON s.opportunity_id = o.id
       WHERE s.user_id = $1
       ORDER BY s.created_at DESC`,
      [userId]
    );

    res.json({
      success: true,
      opportunities: result.rows,
    });
  } catch (error) {
    console.error("Get saved opportunities error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch saved opportunities",
    });
  }
};

module.exports = {
  saveOpportunity,
  unsaveOpportunity,
  getSavedOpportunities,
};