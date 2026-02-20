const fs = require('fs');

fs.writeFile('sample.txt', 'This is node.js', err =>{
    if (err) throw err;
    console.log('File created');
});

