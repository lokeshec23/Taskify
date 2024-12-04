require("dotenv").config(); // Load environment variables from .env file
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(
  cors({
    origin: "*", // frontend URL
  })
);

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log("MongoDB connection error:", error));

// Use authentication routes
app.use("/api", authRoutes);

// Start Server/api/signup
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
