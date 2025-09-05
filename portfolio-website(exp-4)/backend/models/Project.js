const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  githubUrl: String, // changed "link" → "githubUrl" for consistency
});

module.exports = mongoose.model("Project", projectSchema);
