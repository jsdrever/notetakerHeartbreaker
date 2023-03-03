const express = require('express');
const path = require('path');
const api = require('./index.html');
const notesRoute = require('./routes/notesRoute.js');
const htmlRoute = require('./routes/htmlRoute.js');

const PORT = 3001;
const fs = require('fs');
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', notesRoute);

app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/index.html'))
);

// GET Route for notes page
app.get('/feedback', (req, res) =>
  res.sendFile(path.join(__dirname, '/notes.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
//! sort the routes