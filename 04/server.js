// ============================================================
// TEACHING: Express Middleware — JSON, Forms & Static Files
// ============================================================
// Middleware are functions that run in order for every (or matching) requests.
// They can read req/res, modify them, or call next() to pass to the next handler.
// Here we use built-in middleware for JSON, URL-encoded forms, and static files.

const e = require('express');   // unused; 'express' is used below
const express = require('express');
const app = express();

// ------------------------------------------------------------
// Example: Custom middleware chain (commented out)
// ------------------------------------------------------------
// Middleware receives (req, res, next). Call next() to continue to the next
// middleware or route; if you don't, the request never gets a response.
// // First middleware
// app.use((req, res, next) => {
//   console.log('Middleware 1: This always runs');
//   next();
// });
// // Second middleware
// app.use((req, res, next) => {
//   console.log('Middleware 2: This also always runs');
//   next();
// });
// // Route handler
// app.get('/', (req, res) => {
//   console.log('Route handler: This runs when the root URL is accessed');
//   res.send('Hello World!');
// });

// ------------------------------------------------------------
// Middleware: Parse JSON request bodies
// ------------------------------------------------------------
// When the client sends JSON (e.g. Content-Type: application/json), this
// parses it and puts the result in req.body. Must appear before routes that use req.body.
app.use(express.json());

// Route that expects a JSON body. Try: POST /data with body { "name": "Jane" }
app.post('/data', (req, res) => {
  console.log('Received data:', req.body);
  res.send('Data received successfully!');
});

// ------------------------------------------------------------
// Middleware: Parse URL-encoded form bodies
// ------------------------------------------------------------
// For traditional HTML forms (Content-Type: application/x-www-form-urlencoded).
// extended: true allows rich objects; false keeps values as strings.
app.use(express.urlencoded({ extended: true }));

// ------------------------------------------------------------
// Middleware: Serve static files from 'public'
// ------------------------------------------------------------
// Files in the public/ folder are served at the root. Example: public/style.css → /style.css
app.use(express.static('public'));

// Serve login.html at /. We use sendFile with __dirname so the path works from any cwd.
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/login.html');
});

// Form in login.html likely posts to /login. Data lands in req.body thanks to urlencoded.
app.post('/login', (req, res) => {
  console.log('Received form data:', req.body);
  res.send('Form data received successfully!');
});

app.listen(3000, () => {
  console.log('Server running on port http://localhost:3000');
});
