const Note = require("../models/Note");

const createNote = async (req, res) => {
  try {
    const note = new Note({
      title: req.body.title,
      content: req.body.content,
      user: req.user.userId,
    });
    await note.save();
    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({ error: "Error creating note" });
  }
};

// Get all notes for a user
const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.userId });
    res.json(notes);
  } catch (error) {
    res.status(500).json({ error: "Error fetching notes" });
  }
};

// Get a note by ID
const getNoteById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note || note.user.toString() !== req.user.userId) {
      return res
        .status(403)
        .json({ error: "Not authorized or note not found" });
    }
    res.json(note);
  } catch (error) {
    res.status(500).json({ error: "Error fetching note" });
  }
};

// Update a note
const updateNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note || note.user.toString() !== req.user.userId) {
      return res
        .status(403)
        .json({ error: "Not authorized or note not found" });
    }
    note.title = req.body.title || note.title;
    note.content = req.body.content || note.content;
    await note.save();
    res.json(note);
  } catch (error) {
    res.status(500).json({ error: "Error updating note" });
  }
};

// Delete a note
const deleteNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note || note.user.toString() !== req.user.userId) {
      return res
        .status(403)
        .json({ error: "Not authorized or note not found" });
    }
    await note.deleteOne();
    res.json({ message: "Note deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting note" });
  }
};

module.exports = {
  createNote,
  getAllNotes,
  getNoteById,
  updateNote,
  deleteNote,
};
