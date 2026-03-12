// ============================================================
// TEACHING: A Minimal HTTP Server (HTML Response)
// ============================================================
// Same idea as the root server.js, but we send HTML and set
// the Content-Type to "text/html" so the browser renders it as a page.

// Import the http module (built into Node.js)
const http = require("http");

// Create a server. The callback runs once per request.
const server = http.createServer((req, res) => {
    // 200 = success
    res.statusCode = 200;
    // "text/html" tells the browser to interpret the body as HTML
    res.setHeader("Content-Type", "text/html");

    // Send a simple HTML string. For real apps you'd use a template or framework.
    res.end("Welcome to Node.js Tutorial");
});

// Bind to port 3000 and run the callback when the server is ready
server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
