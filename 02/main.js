const http = require('http');
const os = require('os');
// package.json lives at repo root
const packageinfo = require('../../package.json');

function logRequest(req) {
    const now = new Date().toISOString();
    const addr = (req.socket && req.socket.remoteAddress) ? req.socket.remoteAddress : 'unknown';
    console.log(`${now} - ${addr} - ${req.method} ${req.url}`);
}

const server = http.createServer((req, res) => {
    logRequest(req);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    if (req.url === '/') {
        res.end('<h1>Welcome to the Home Page</h1>');
    } else if (req.url === '/about') {
        res.end(
            `<h1>about OS</h1>
            <p>Platform: ${os.platform()}</p>
            <p>arch: ${os.arch()}</p>
            <p>total mem: ${os.totalmem()}</p>
            <p>version: ${os.version()}</p>`
        );
    } else if (req.url === '/author') {
        res.end(`<h1>Author Page</h1>
            <p>Author: ${packageinfo.author}</p>`);
    } else {
        res.end('<h1>404 Not Found</h1>');
    }
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
