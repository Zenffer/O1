const fs = require('fs');

fs.readFile('log.txt' , 'utf8' , (err, data) => {
    if (err) throw err;
    const updateData = data.replace('This is a new line' , 'CSPC');

    fs.writeFile('log.txt', updateData, err =>{
        if(err) throw err;
        console.log('File updated successfully');
    })
})