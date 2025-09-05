const express = require("express");
const router = express.Router();
const Bio = require("../models/Bio");

// Get all bios
router.get("/", async (req, res) => {
  const bios = await Bio.find();
  res.json(bios);
});

// Create new bio
router.post("/", async (req, res) => {
  const newBio = new Bio(req.body);
  await newBio.save();
  res.json(newBio);
});

// Update bio
router.put("/:id", async (req, res) => {
  const updatedBio = await Bio.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updatedBio);
});

// Delete bio
router.delete("/:id", async (req, res) => {
  await Bio.findByIdAndDelete(req.params.id);
  res.json({ message: "Bio deleted" });
});

module.exports = router;
