// ============================================================
// TEACHING: Reading a File
// ============================================================
// readFile loads the file and passes the contents to the callback.
// Use 'utf8' to get a string; without it you get a Buffer (raw bytes).

const fs = require('fs');

// Callback: (err, data). Always check err first!
fs.readFile('log.txt' , 'utf8' , (err, data) => {
    if (err) throw err;
    console.log(data);
});
