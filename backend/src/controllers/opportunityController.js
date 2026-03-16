const pool = require("../db/db");

const getAllOpportunities = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM opportunities ORDER BY created_at DESC"
    );

    res.status(200).json({
      success: true,
      count: result.rows.length,
      opportunities: result.rows,
    });
  } catch (error) {
    console.error("Error fetching opportunities:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch opportunities",
    });
  }
};

module.exports = {
  getAllOpportunities,
}; 