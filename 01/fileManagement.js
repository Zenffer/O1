// ============================================================
// TEACHING: Node.js File System & OS Module Examples
// ============================================================
// Commented examples show fs operations; active code uses the 'os' module.
// Uncomment the blocks below to try each file operation!

// ------------------------------------------------------------
// EXAMPLE 1: Read a file, modify its content, then write it back
// ------------------------------------------------------------
// Pattern: read → transform → write. Callbacks are used because file I/O is async.
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

// ------------------------------------------------------------
// EXAMPLE 2: Create a directory (folder)
// ------------------------------------------------------------
// Use { recursive: true } to create nested folders like 'a/b/c'.
// const fs = require('fs');
//     fs.mkdir('uploads',err =>{
//         if (err) throw err;
//         console.log('Folder created successfully.');
////////////////////////////

// ------------------------------------------------------------
// EXAMPLE 3: Delete a file
// ------------------------------------------------------------
// fs.unlink removes a file (for folders use fs.rmdir or fs.rm). Permanent!
// const fs = require('fs');
//     fs.unlink('sample.txt', err =>{
//         if (err) throw err;
//         console.log('File deleted successfully.');

// ------------------------------------------------------------
// ACTIVE CODE: The 'os' module — system information
// ------------------------------------------------------------
const os = require('os');
console.log('Operating System Info:');
console.log(`Platform: ${os.platform()}`);
console.log(`Architecture: ${os.arch()}`);
console.log(`CPU Cores: ${os.cpus().length}`);
console.log(`Total Memory: ${(os.totalmem() / (1024 ** 3)).toFixed(2)} GB`);
console.log(`Free Memory: ${(os.freemem() / (1024 ** 3)).toFixed(2)} GB`);
console.log('Uptime:', os.uptime(), 'seconds');
console.log('Hostname:', os.hostname());
console.log('Network Interfaces:', os.networkInterfaces());
// });