
const notesRoute = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');


// GET Route for retrieving all the notes
notesRoute.get('/', (req, res) => {
  console.info(`${req.method} note has been received`);
  readFromFile('./develop/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for a new UX/UI note
notesRoute.post('/', (req, res) => {
  console.info(`${req.method} request received to add a note`);
  console.log(req.body);

  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
     title,
     text,
    };

    readAndAppend(newNote, './develop/db.json');
    res.json(`Note added successfully 🚀`);
  } else {
    res.error('Error in adding note');
  }
});

module.exports = notesRoute;
//! sort the names and callbacks