const fs = require("fs");
const path = require("path");
const pool = require("./db");

async function initDatabase() {
  try {
    const sqlPath = path.join(__dirname, "../../sql/init.sql");
    const sql = fs.readFileSync(sqlPath, "utf8");

    await pool.query(sql);
    console.log("Database tables created successfully");
    process.exit(0);
  } catch (error) {
    console.error("Error creating tables:", error);
    process.exit(1);
  }
}

initDatabase();