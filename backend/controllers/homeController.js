const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { jwtSecret } = require("../config/config");
const { validationResult } = require("express-validator");
const Task = require("../models/TaskSchema"); // Task model 

exports.getUserDetails = async (req, res) => {
    try {
      const token = req.headers.authorization?.split(" ")[1];
      if (!token) {
        return res.status(401).json({ message: "Token not provided" });
      }
  
      console.log("token from getUSer", token)
      // Verify the token
      const decoded = jwt.verify(token, jwtSecret);
      console.log({decoded, token, jwtSecret})
      // Fetch user details
      const user = await User.findById(decoded.id, "name"); // Only fetch the 'name' field
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      res.status(200).json({ name: user.name });
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
};
  

exports.getTaskList = async (req, res) => {
  try {
    const tasks = await Task.find({ id: req.user.id }); // Fetch tasks based on userID from token
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: "Server error." });
  }
};