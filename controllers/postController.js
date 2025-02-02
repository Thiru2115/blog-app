const Post = require("../models/Post");

exports.createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newPost = new Post({ title, content, author: req.user.userId });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: "Failed to Create Post" });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("author", "username email");
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: "Failed to Fetch Posts" });
  }
};

exports.getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate(
      "author",
      "username email"
    );
    if (!post) return res.status(404).json({ error: "Post Not Found" });
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: "Failed to Fetch Post" });
  }
};
exports.updatePost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ error: "Post Not Found" });
    }

    post.title = title || post.title;
    post.content = content || post.content;

    await post.save();

    res.status(200).json({ message: "Post Updated Successfully", post });
  } catch (error) {
    res.status(500).json({ error: "Failed to Update Post" });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ error: "Post Not Found" });

    await post.deleteOne();
    res.status(200).json({ message: "Post Deleted" });
  } catch (error) {
    res.status(500).json({ error: "Failed to Delete Post" });
  }
};
