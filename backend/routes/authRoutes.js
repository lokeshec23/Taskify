const express = require("express");
const router = express.Router();
const { signup, login } = require("../controllers/authController");
const { getUserDetails, getTaskList
} = require("../controllers/homeController");
const { postTask } = require("../controllers/taskRoutes");
const  authenticateToken  = require("../middleware/authMiddleware");
const { body, validationResult } = require("express-validator");
const { UpdateAPI, DeleteAPI } = require("../controllers/UDController");
// User Registration Route
router.post("/signup", signup);

// User Login Route
router.post("/login", login);

// User Login Route
router.get("/fetchUserDetails", authenticateToken,  getUserDetails);

// post task to db
router.post("/tasks", authenticateToken,
    [
      body("taskName").notEmpty().withMessage("Task name is required"),
      body("dueDate").notEmpty().withMessage("Due date is required").isISO8601().toDate(),
    ],
    postTask);


    // fetch task list
router.get("/fetchTaskList", authenticateToken, getTaskList);

    // Route to update a task by ID
router.put("/updateTask/:id", authenticateToken, UpdateAPI);

    // fetch task list
router.get("/deleteTask/:id", authenticateToken,  DeleteAPI);

module.exports = router;
