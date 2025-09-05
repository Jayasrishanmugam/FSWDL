const mongoose = require("mongoose");

const bioSchema = new mongoose.Schema({
  name: String,
  description: String,
});

module.exports = mongoose.model("Bio", bioSchema);
