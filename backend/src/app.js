const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const opportunityRoutes = require("./routes/opportunityRoutes");
const authRoutes = require("./routes/authRoutes");
const savedOpportunityRoutes = require("./routes/savedOpportunityRoutes");

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API is running",
  });
});

app.use("/api/opportunities", opportunityRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/saved-opportunities", savedOpportunityRoutes);

module.exports = app;