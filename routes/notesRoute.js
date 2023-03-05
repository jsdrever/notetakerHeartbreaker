
const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');


// GET Route for retrieving all the tips
notesRoute.get('/', (req, res) => {
  console.info(`${req.method} note has been received`);
  readFromFile('./notes.html.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for a new UX/UI tip
notesRoute.post('/', (req, res) => {
  console.info(`${req.method} request received to add a note`);
  console.log(req.body);

  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
     title,
     text,
     uuid,
    };

    readAndAppend(newNote, './notes.html.json');
    res.json(`Note added successfully 🚀`);
  } else {
    res.error('Error in adding note');
  }
});

module.exports = notes;
//! sort the names and callbacks