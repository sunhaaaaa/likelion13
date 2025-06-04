const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const PORT = 4000;

// Middleware
app.use(bodyParser.json());

// CORS
app.use(
  cors({
    origin: "http://localhost:4001",
  })
);

// Initialize SQLite DB
const db = new sqlite3.Database("community.db");

// Create table if it doesn't exist
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS posts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      content TEXT NOT NULL
    )
  `);
});

// GET all posts
app.get("/posts", (req, res) => {
  db.all("SELECT * FROM posts", (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// GET a single post by ID
app.get("/posts/:id", (req, res) => {
  const { id } = req.params;
  db.get("SELECT * FROM posts WHERE id = ?", [id], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.status(404).json({ error: "Post not found" });
    res.json(row);
  });
});

// POST a new post
app.post("/posts", (req, res) => {
  const { title, content } = req.body;
  db.run("INSERT INTO posts (title, content) VALUES (?, ?)", [title, content], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: this.lastID, title, content });
  });
});

// PUT - Replace a post entirely
app.put("/posts/:id", (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  db.run(
    "UPDATE posts SET title = ?, content = ? WHERE id = ?",
    [title, content, id],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      if (this.changes === 0) return res.status(404).json({ error: "Post not found" });
      res.json({ message: "Post replaced" });
    }
  );
});

// PATCH - Update part of a post
app.patch("/posts/:id", (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  db.get("SELECT * FROM posts WHERE id = ?", [id], (err, post) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!post) return res.status(404).json({ error: "Post not found" });

    const updatedTitle = title || post.title;
    const updatedContent = content || post.content;

    db.run(
      "UPDATE posts SET title = ?, content = ? WHERE id = ?",
      [updatedTitle, updatedContent, id],
      function (err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Post updated" });
      }
    );
  });
});

// DELETE a post
app.delete("/posts/:id", (req, res) => {
  const { id } = req.params;
  db.run("DELETE FROM posts WHERE id = ?", [id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    if (this.changes === 0) return res.status(404).json({ error: "Post not found" });
    res.json({ message: "Post deleted" });
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
