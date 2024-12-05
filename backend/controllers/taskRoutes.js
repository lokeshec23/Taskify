// routes/tasksRoutes.js
const express = require("express");
const router = express.Router();
// const authenticateToken = require("../middleware/authMiddleware");
const { body, validationResult } = require("express-validator");
const Task = require("../models/TaskSchema");

// Add Task

exports.postTask = async (req, res) => {
    const { taskName, description, dueDate } = req.body;

    try {
      const newTask = new Task({
        taskName,
        description,
        dueDate,
        id: req.user.id, // Extracted from token
      });
      await newTask.save();
      res.status(201).json(newTask);
    } catch (error) {
      console.log("Error in tasks api", error)
      res.status(500).json({ error: "Server Error" });
    }
  }



