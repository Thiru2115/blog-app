const express = require("express");
const {
  createPost,
  getAllPosts,
  getPostById,
  deletePost,
  updatePost,
} = require("../controllers/postController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();
router.put("/byId/:id", authMiddleware, updatePost);
router.post("/", authMiddleware, createPost);
router.get("/", getAllPosts);
router.get("/:id", getPostById);
router.delete("/:id", authMiddleware, deletePost);

module.exports = router;
