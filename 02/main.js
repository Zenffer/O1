const http = require('http');
const os = require('os');
const fs = require('fs');
const path = require('path');
// package.json lives at repo root
const packageinfo = require('../../package.json');

// Use the existing log file in MainFldr/01
const logPath = path.join(__dirname, '..', '01', 'log.txt');

function logRequest(req) {
    const now = new Date().toISOString();
    const addr = req.socket && req.socket.remoteAddress ? req.socket.remoteAddress : 'unknown';
    const entry = `${now} - ${addr} - ${req.method} ${req.url}\n`;
    fs.appendFile(logPath, entry, (err) => {
        if (err) console.error('Failed to write log.txt:', err);
    });
}

const server = http.createServer((req, res) => {
    // Log the request to MainFldr/01/log.txt
    logRequest(req);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    if(req.url === '/'){
        res.end('<h1>Welcome to the Home Page</h1>'
        );
    }else if (req.url === '/about'){
        res.end(
            `<h1>about OS</h1>
            <p>Platform: ${os.platform}</p>
            <p>arch: ${os.arch}</p>
            <p>total mem: ${os.totalmem()}</p>
            <p>version: ${os.version}</p>`
        );
    } else if (req.url === '/profile'){
        fs.readFile(logPath,'utf8',(err,data)=>{
            if(err){
                res.end("<h1>Error reading file</h1>");
            }else{
                res.end(`<h1>Profile Page</h1><pre>${data}</pre>`);
            }
        });
    } else if (req.url === '/log'){
        // serve the same log file as plain text
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        fs.readFile(logPath, 'utf8', (err, data) => {
            if (err) return res.end('No log.txt available yet.');
            res.end(data);
        });
    }else if (req.url === '/author'){
        res.end(`<h1>Author Page</h1>
            <p>Author: ${packageinfo.author}</p>`);
    }else{
        res.end('<h1>404 Not Found</h1>');
    }
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});