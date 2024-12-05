const express = require("express");
const router = express.Router();
const { signup, login } = require("../controllers/authController");
const { getUserDetails } = require("../controllers/homeController");
const  authenticateToken  = require("../middleware/authMiddleware");

// User Registration Route
router.post("/signup", signup);

// User Login Route
router.post("/login", login);

// User Login Route
router.get("/fetchUserDetails", authenticateToken,  getUserDetails);

module.exports = router;
