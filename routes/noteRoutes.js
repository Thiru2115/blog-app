const express = require("express");
const {
  createNote,
  getAllNotes,
  getNoteById,
  updateNote,
  deleteNote,
} = require("../controllers/notesController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, createNote);
router.get("/", authMiddleware, getAllNotes);
router.get("/:id", authMiddleware, getNoteById);
router.put("/:id", authMiddleware, updateNote);
router.delete("/:id", authMiddleware, deleteNote);

module.exports = router;
