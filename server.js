const express = require("express");

const app = express();

const notesData = require('./Develop/db/db.json')

const PORT = process.env.PORT || 5000;

const path = require('path')

app.listen(PORT, () => {
    console.log(`Server started on port http://localhost:${PORT}`);
  });

// Get Request to the notes page
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "Develop", "/public/notes.html"));
  });

// Get Request to the notes page
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "Develop", "/public/index.html"));
  });

// Sets up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// API GET AND POST REQUESTS
app.get('/api/terms', (req, res) => res.json(notesData));

app.post("/api/notes", (req, res) => {
    const newNote = {
      title: req.body.title,
      text: req.body.text,
      id: uuid.v4(),
    }
});