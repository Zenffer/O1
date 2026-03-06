const e = require('express');
const express = require('express');
const app = express();

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

app.use(express.json()); // Middleware to parse JSON bodies

// Route to handle POST requests to /data
app.post('/data', (req, res) => {
  console.log('Received data:', req.body); // Log the received data to the console
  res.send('Data received successfully!');
});

app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies

app.use(express.static('public')); // Middleware to serve static files from the 'public' directory

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/login.html'); // Serve the login.html file when the root URL is accessed
});

app.post('/login', (req, res) => {
  console.log('Received form data:', req.body); // Log the received form data to the console
  res.send('Form data received successfully!');
});

app.listen(3000, () => {
  console.log('Server running on port http://localhost:3000');
});
