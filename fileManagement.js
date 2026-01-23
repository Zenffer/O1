const fs = require('fs');

    fs.readFile('log.txt','utf8', (err, data) =>{
        if (err) throw err;

        const updateData = data.replace('New Line','CSPC');

        fs.writeFile('log.txt', updateData, 'utf8', (err) => {
            if (err) throw err;
            console.log('File updated successfully.');
        });
    });