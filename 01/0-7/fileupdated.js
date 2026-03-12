// ============================================================
// TEACHING: Updating a File (Read → Modify → Write)
// ============================================================
// We read 'log.txt', change some text in memory, then write the
// updated content back. This is a common pattern for editing files.

const fs = require('fs');

// Step 1: Read the file. 'utf8' gives us a string; without it we get a Buffer.
fs.readFile('log.txt' , 'utf8' , (err, data) => {
    if (err) throw err;
    // Step 2: Transform the data (replace one string with another)
    const updateData = data.replace('This is a new line' , 'CSPC');

    // Step 3: Write the modified content back. writeFile overwrites the whole file.
    fs.writeFile('log.txt', updateData, err =>{
        if(err) throw err;
        console.log('File updated successfully');
    })
})