const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { jwtSecret } = require("../config/config");

exports.getUserDetails = async (req, res) => {
    try {
      const token = req.headers.authorization?.split(" ")[1];
      if (!token) {
        return res.status(401).json({ message: "Token not provided" });
      }
  
      // Verify the token
      const decoded = jwt.verify(token, jwtSecret);
      console.log(decoded)
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