// ============================================================
// TEACHING: Building Your First HTTP Server in Node.js
// ============================================================
// This file demonstrates how to create a simple web server using
// Node.js's built-in 'http' module—no external packages needed!

// ------------------------------------------------------------
// Step 1: Import the http module
// ------------------------------------------------------------
// Node.js is modular: we "require" built-in or installed modules.
// The 'http' module gives us everything we need to handle HTTP
// requests (like when a browser visits a URL).
const http = require("http");

// ------------------------------------------------------------
// Step 2: Create an HTTP server
// ------------------------------------------------------------
// createServer() takes a callback function that runs every time
// someone makes a request. The callback receives two objects:
//   - req: the incoming request (URL, headers, method, etc.)
//   - res: the response we send back to the client
const server = http.createServer((req, res) => {
    // Set the HTTP status code. 200 means "OK" (success).
    res.statusCode = 200;

    // Tell the client what type of content we're sending.
    // "text/plain" means plain text (not HTML, JSON, etc.).
    res.setHeader("Content-Type", "text/plain");

    // Send the response body and end the response.
    // Without res.end(), the connection would hang!
    res.end("Hello, Im Your Worst Nightmare\n");
});

// ------------------------------------------------------------
// Step 3: Start listening for connections
// ------------------------------------------------------------
// listen(port, callback) binds the server to a port. When the
// server is ready, the callback runs. Port 3000 is a common
// choice for local development.
server.listen(3000, () => {
    console.log("Server running at http://localhost:3000/");
});

// Try it: run "node server.js" and open http://localhost:3000 in your browser.
