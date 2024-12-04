const express = require("express");
const router = express.Router();
const { signup, login } = require("../controllers/authController");

// User Registration Route
router.post("/signup", signup);

// User Login Route
router.post("/login", login);

module.exports = router;
