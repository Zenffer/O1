// ============================================================
// TEACHING: HTTP Server with Simple Routing
// ============================================================
// This example builds on the basic server: we handle different URLs
// (routes) and return different content. We also log each request
// and use the 'os' and a JSON file for dynamic data.

const http = require('http');
const os = require('os');
// Require can load JSON files too—Node parses them into a plain object.
// Path is relative to the current working directory when you run the script.
//
// How to create a package.json:
//   1. From the terminal, in your project folder:  npm init
//      (answer the prompts, or use  npm init -y  for all defaults)
//   2. Or create it manually—minimum for this example:
//      { "name": "my-app", "version": "1.0.0", "author": "Your Name" }
const packageinfo = require('../../package.json');

// ------------------------------------------------------------
// Helper: Log each incoming request
// ------------------------------------------------------------
// req.socket.remoteAddress gives the client's IP. We use optional
// chaining (req.socket && ...) in case socket is missing. req.method
// is 'GET', 'POST', etc.; req.url is the path (e.g. '/about').
function logRequest(req) {
    const now = new Date().toISOString();
    const addr = (req.socket && req.socket.remoteAddress) ? req.socket.remoteAddress : 'unknown';
    console.log(`${now} - ${addr} - ${req.method} ${req.url}`);
}

// ------------------------------------------------------------
// Create the server and define routes
// ------------------------------------------------------------
const server = http.createServer((req, res) => {
    logRequest(req);
    // writeHead sets status and headers in one call (alternative to setHeader + statusCode)
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Simple routing: check req.url and send different HTML for each path
    if (req.url === '/') {
        res.end('<h1>Welcome to the Home Page</h1>');
    } else if (req.url === '/about') {
        // Use the 'os' module to show system info in the response
        res.end(
            `<h1>about OS</h1>
            <p>Platform: ${os.platform()}</p>
            <p>arch: ${os.arch()}</p>
            <p>total mem: ${os.totalmem()}</p>
            <p>version: ${os.version()}</p>`
        );
    } else if (req.url === '/author') {
        // Data from package.json—shows how to use external config/data
        res.end(`<h1>Author Page</h1>
            <p>Author: ${packageinfo.author}</p>`);
    } else {
        // Any other URL: send 404. (We could set res.statusCode = 404 for a proper HTTP 404.)
        res.end('<h1>404 Not Found</h1>');
    }
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
