const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { jwtSecret } = require("../config/config");
const { validationResult } = require("express-validator");
const Task = require("../models/TaskSchema"); // Task model 

exports.UpdateAPI = async (req, res) => {
    try {
        const { id } = req.params; // Get task ID from URL
        const { taskName, description, dueDate } = req.body; // Get new data from request body
    
        // Find the task by ID and check if it's the logged-in user's task
        const task = await Task.findOne({ _id: id, id: req.user.id });
    
        if (!task) {
          return res.status(404).json({ message: "Task not found or you're not authorized to edit it" });
        }
    
        // Update the task with new values
        task.taskName = taskName || task.taskName;
        task.description = description || task.description;
        task.dueDate = dueDate || task.dueDate;
    
        await task.save(); // Save the updated task in the database
    
        res.status(200).json({ message: "Task updated successfully", task, type:"ok" });
      } catch (err) {
        res.status(500).json({ message: "Server error" });
      }
};
  

exports.DeleteAPI = async (req, res) => {
  try {
    const { id } = req.params; // Get task ID from URL

    // Find the task by ID and check if it's the logged-in user's task
    const task = await Task.findOneAndDelete({ _id: id, id: req.user.id });

    if (!task) {
      return res.status(404).json({ message: "Task not found or you're not authorized to delete it" });
    }

    res.status(200).json({ message: "Task deleted successfully", type: "ok" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};