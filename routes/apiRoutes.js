
// const notesRoute = require('express').Router();
// const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils');


// // GET Route for retrieving all the notes
// notesRoute.get('/', (req, res) => {
//   console.info(`${req.method} note has been received`);
//   readFromFile('./develop/db.json').then((data) => res.json(JSON.parse(data)));
// });

// // POST Route for a new UX/UI note
// notesRoute.post('/', (req, res) => {
//   console.info(`${req.method} request received to add a note`);
//   console.log(req.body);

//   const { title, text } = req.body;

//   if (req.body) {
//     const newNote = {
//      title,
//      text,
//     };

//     readAndAppend(newNote, './develop/db.json');
//     res.json(`Note added successfully 🚀`);
//   } else {
//     res.error('Error in adding note');
//   }
// });

// //delete notes
// notes.delete('/notes/:id', (req,res)=>{
//   let noteId = req.params.id;
//   for (let i = 0; i < db.length; i++) {
//     if (noteId === db[i].id){
//       console.info(db[i])
//     db.splice(i, 1)
//     }
//   }
//   writeToFile("db/db.json", db);
//   readFromFile("db/db.json").then((data)=>res.json(JSON.parse(data))) 
// })
// module.exports = notesRoute;
// //! sort the names and callbacks
const router = require('express').Router();
const store = require('../db/store');

// GET "/api/notes" responds with all notes from the database
router.get('/notes', (req, res) => {
  store
    .getNotes()
    .then((notes) => {
      return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
});

router.post('/notes', (req, res) => {
  store
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
});

// DELETE "/api/notes" deletes the note with an id equal to req.params.id
router.delete('/notes/:id', (req, res) => {
  store
    .removeNote(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;