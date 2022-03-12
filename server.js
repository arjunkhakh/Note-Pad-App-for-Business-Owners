// Defining my variables
const express = require("express");
const app = express();
const notesData = require('./Develop/db/db.json')
const PORT = process.env.PORT || 5000;
const path = require('path')
const uuid = require('uuid')
const fs = require('fs')

app.use(express.static(path.join(__dirname, "./Develop/public")));

// Creates a server link for the application
app.listen(PORT, () => {
    console.log(`Server started on port http://localhost:${PORT}`);
  });

// Get Request to the notes page
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "Develop", "/public/notes.html"));
  });

// Sets up the express app to handle data parsing
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// API GET AND POST REQUESTS
app.get('/api/notes', (req, res) => res.json(notesData));

app.post("/api/notes", (req, res) => {
    const newNote = {
      title: req.body.title,
      text: req.body.text,
      id: uuid.v4(),
    }

// Get Request to the index page
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "Develop", "/public/index.html"));
});

notesData.push(newNote);

res.json(notesData);

//   Add new note to the note-database
fs.writeFile("./Develop/db/db.json", JSON.stringify(notesData, null, 2), (err) => {
  if (err) throw err;
});
});