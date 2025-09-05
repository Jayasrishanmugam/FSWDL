const express = require("express");
const router = express.Router();
const Skill = require("../models/Skill");

// Get all skills
router.get("/", async (req, res) => {
  const skills = await Skill.find();
  res.json(skills);
});

// Create skill
router.post("/", async (req, res) => {
  const newSkill = new Skill(req.body);
  await newSkill.save();
  res.json(newSkill);
});

// Update skill
router.put("/:id", async (req, res) => {
  const updatedSkill = await Skill.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updatedSkill);
});

// Delete skill
router.delete("/:id", async (req, res) => {
  await Skill.findByIdAndDelete(req.params.id);
  res.json({ message: "Skill deleted" });
});

module.exports = router;
