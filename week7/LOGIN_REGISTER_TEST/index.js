const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");
const app = express();
const PORT = 4173;

// CORS
app.use(
  cors({
    origin: "http://localhost:4174",
  })
);
app.use(bodyParser.json());

const db = new sqlite3.Database("database.db");
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT,
      username TEXT UNIQUE,
      password TEXT,
      sessionId TEXT
    )`);
});

app.get("/check-username", (req, res) => {
  const { username } = req.query;
  db.get("SELECT * FROM users WHERE username = ?", [username], (err, row) => {
    if (row) return res.status(409).json({ exists: true });
    return res.json({ exists: false });
  });
});

app.post("/register", (req, res) => {
  const { email, username, password } = req.body;
  const stmt = db.prepare("INSERT INTO users (email, username, password) VALUES (?, ?, ?)");
  stmt.run(email, username, password, function (err) {
    if (err) return res.status(500).json({ error: "Registration failed." });
    res.json({ success: true });
  });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  db.get(
    "SELECT * FROM users WHERE username = ? AND password = ?",
    [username, password],
    (err, user) => {
      if (user) {
        const sessionId = uuidv4();
        db.run("UPDATE users SET sessionId = ? WHERE id = ?", [sessionId, user.id]);
        return res.json({ sessionId });
      }
      res.status(401).json({ error: "Invalid credentials" });
    }
  );
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
