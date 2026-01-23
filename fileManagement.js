// const fs = require('fs');

//     fs.readFile('log.txt','utf8', (err, data) =>{
//         if (err) throw err;
//         console.log(data);

//         const updateData = data.replace('New Line','CSPC');

//         fs.writeFile('log.txt', updateData, 'utf8', (err) => {
//             if (err) throw err;
//             console.log('File updated successfully.');
//         });
//     });
/////////////////////////////

// const fs = require('fs');
//     fs.mkdir('uploads',err =>{
//         if (err) throw err;
//         console.log('Folder created successfully.');

////////////////////////////

const fs = require('fs');
    fs.unlink('sample.txt', err =>{
        if (err) throw err;
        console.log('File deleted successfully.');

});