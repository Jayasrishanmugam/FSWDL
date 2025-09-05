const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
  title: String,
  level: String,
});

module.exports = mongoose.model("Skill", skillSchema);
