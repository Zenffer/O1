// ============================================================
// TEACHING: Appending to a File
// ============================================================
// appendFile adds content to the end of a file without overwriting.
// If the file doesn't exist, Node creates it. Great for logs!

const fs = require('fs');

// We add \n so the new text goes on its own line
fs.appendFile('log.txt', '\n This is a new line', err =>{
    if (err) throw err;
    console.log('File created');
});