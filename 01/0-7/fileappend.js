const fs = require('fs');

fs.appendFile('log.txt', '\n This is a new line', err =>{
    if (err) throw err;
    console.log('File created');
});