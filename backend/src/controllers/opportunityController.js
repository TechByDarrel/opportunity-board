const pool = require("../db/db");

const getAllOpportunities = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM opportunities WHERE is_published = true ORDER BY created_at DESC"
    );

    res.json({
      success: true,
      opportunities: result.rows,
    });
  } catch (error) {
    console.error("Get opportunities error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch opportunities",
    });
  }
};

const createOpportunity = async (req, res) => {
  try {
    const {
      title,
      organization,
      category,
      location,
      type,
      work_mode,
      description,
      apply_url,
      deadline,
    } = req.body;

    const result = await pool.query(
      `INSERT INTO opportunities
      (title, organization, category, location, type, work_mode, description, apply_url, deadline)
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)
      RETURNING *`,
      [
        title,
        organization,
        category,
        location,
        type,
        work_mode,
        description,
        apply_url,
        deadline,
      ]
    );

    res.status(201).json({
      success: true,
      opportunity: result.rows[0],
    });
  } catch (error) {
    console.error("Create opportunity error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create opportunity",
    });
  }
};

const updateOpportunity = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      `UPDATE opportunities
       SET title=$1,
           organization=$2,
           category=$3,
           location=$4,
           type=$5,
           work_mode=$6,
           description=$7,
           apply_url=$8,
           deadline=$9,
           updated_at=NOW()
       WHERE id=$10
       RETURNING *`,
      [
        req.body.title,
        req.body.organization,
        req.body.category,
        req.body.location,
        req.body.type,
        req.body.work_mode,
        req.body.description,
        req.body.apply_url,
        req.body.deadline,
        id,
      ]
    );

    res.json({
      success: true,
      opportunity: result.rows[0],
    });
  } catch (error) {
    console.error("Update opportunity error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update opportunity",
    });
  }
};

const deleteOpportunity = async (req, res) => {
  try {
    const { id } = req.params;

    await pool.query("DELETE FROM opportunities WHERE id=$1", [id]);

    res.json({
      success: true,
      message: "Opportunity deleted",
    });
  } catch (error) {
    console.error("Delete opportunity error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete opportunity",
    });
  }
};

module.exports = {
  getAllOpportunities,
  createOpportunity,
  updateOpportunity,
  deleteOpportunity,
};