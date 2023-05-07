// const express = require('express');
// const path = require('path');
// // const api = require('./index.html');
// const notesRoute = require('./routes/notesRoute.js');


// const PORT = 3001;
// const fs = require('fs');
// const app = express();

// // Middleware for parsing JSON and urlencoded form data
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use('/api', notesRoute);

// app.use(express.static('public'));

// // GET Route for homepage
// app.get('/', (req, res) =>
//   res.sendFile(path.join(__dirname, './public/index.html'))
// );

// // GET Route for notes page
// app.get('/notes', (req, res) =>
//   res.sendFile(path.join(__dirname, './public/notes.html'))
// );

// app.listen(PORT, () =>
//   console.log(`App listening at http://localhost:${PORT} 🚀`)
// );

const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3001;

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));