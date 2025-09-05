const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/portfolioWebsiteDB")
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error(err));

/* ============================
   📌 SCHEMAS & MODELS
===============================*/

// --- Bio Schema ---
const bioSchema = new mongoose.Schema({
  name: String,
  description: String,
});
const Bio = mongoose.model("Bio", bioSchema);

// --- Skill Schema ---
const skillSchema = new mongoose.Schema({
  title: String, // e.g. Python, SQL
  level: String, // e.g. Advanced, Intermediate
});
const Skill = mongoose.model("Skill", skillSchema);

// --- Project Schema ---
const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  githubUrl: String, // link to GitHub repo
});
const Project = mongoose.model("Project", projectSchema);

// --- Contact Schema ---
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});
const Contact = mongoose.model("Contact", contactSchema);

/* ============================
   📌 ROUTES
===============================*/

// --- Bio Routes ---
app.get("/api/bio", async (req, res) => {
  const bios = await Bio.find();
  res.json(bios);
});
app.post("/api/bio", async (req, res) => {
  const newBio = new Bio(req.body);
  await newBio.save();
  res.json(newBio);
});

// --- Skills Routes ---
app.get("/api/skills", async (req, res) => {
  const skills = await Skill.find();
  res.json(skills);
});
app.post("/api/skills", async (req, res) => {
  const newSkill = new Skill(req.body);
  await newSkill.save();
  res.json(newSkill);
});

// --- Projects Routes ---
app.get("/api/projects", async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});
app.post("/api/projects", async (req, res) => {
  const newProject = new Project(req.body);
  await newProject.save();
  res.json(newProject);
});

// --- Contact Routes ---
app.get("/api/contacts", async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
});
app.post("/api/contacts", async (req, res) => {
  try {
    console.log("📩 New contact:", req.body);
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json(newContact);
  } catch (err) {
    res.status(500).json({ error: "Failed to save contact" });
  }
});

/* ============================
   📌 START SERVER
===============================*/
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
