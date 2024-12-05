const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  taskName: { type: String, required: true },
  description: { type: String },
  dueDate: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
  id: { type: String, required: true }, // userID
});

module.exports = mongoose.model("Task", TaskSchema);
