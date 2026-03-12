// ============================================================
// TEACHING: Writing a New File
// ============================================================
// writeFile creates a new file or overwrites an existing one.
// To add to the end instead, use appendFile (see fileappend.js).

const fs = require('fs');

// If 'sample.txt' already exists, its previous content is replaced
fs.writeFile('sample.txt', 'This is node.js', err =>{
    if (err) throw err;
    console.log('File created');
});

