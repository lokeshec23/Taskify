// routes/tasksRoutes.js
const express = require("express");
const router = express.Router();
const authenticateToken = require("../middleware/authMiddleware");

router.get("/tasks", authenticateToken, (req, res) => {
  res
    .status(200)
    .json({ message: "Task data accessible", userId: req.user.id });
});

module.exports = router;
