// ============================================================
// TEACHING: Deleting a File
// ============================================================
// fs.unlink removes a file permanently (not moved to trash).
// For directories use fs.rmdir or fs.rm.

const fs = require('fs');

fs.unlink('sample.txt', err =>{
    if (err) throw err;
    console.log('File deleted');
});