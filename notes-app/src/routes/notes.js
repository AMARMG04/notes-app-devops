import express from "express";
import Note from "../models/Note.js";

const router = express.Router();

// Get all notes
router.get("/", async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

// Create a note
router.post("/", async (req, res) => {
  const note = await Note.create({ text: req.body.text });
  res.json(note);
});

// Update note
router.put("/:id", async (req, res) => {
  const note = await Note.findByIdAndUpdate(req.params.id, { text: req.body.text }, { new: true });
  res.json(note);
});

// Delete note
router.delete("/:id", async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.json({ message: "Note deleted" });
});

export default router;