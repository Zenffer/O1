// ============================================================
// TEACHING: Express.js — Routing, HTTP Methods & Parameters
// ============================================================
// Express simplifies the built-in http module: we define routes with
// app.get(), app.post(), etc., and use req.params (route params) and
// req.query (query string). Install with: npm install express

const express = require('express');
const app = express();

// Server configuration. (Note: variable is "hostnamae" — often typo for "hostname")
const hostnamae = 'localhost';
const port = 3000;

// ------------------------------------------------------------
// Home route — different response for GET vs POST
// ------------------------------------------------------------
// Same path '/' can have different handlers per HTTP method.
// GET is for "give me this resource"; POST is for "create something".
app.get('/', (req, res) => {
    res.send('Get request from the home page');
});

app.post('/', (req, res) => {
    res.send('Post request from to the home page');
});

// PUT = update, DELETE = remove. Uncomment to try them (e.g. with Postman or curl).
// app.put('/', (req, res) => {
//     res.send('Put request from to the home page');
// });
// app.delete('/', (req, res) => {
//     res.send('Delete request from to the home page');
// });

// ------------------------------------------------------------
// Simple fixed route: /about
// ------------------------------------------------------------
app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1><p>This is the about page.</p>');
});

// ------------------------------------------------------------
// Parameterized route — values from the URL path
// ------------------------------------------------------------
// :userID and :userName are route parameters. Express puts them in req.params.
// Example: GET /user/42/name/Alice  →  req.params = { userID: '42', userName: 'Alice' }
app.get('user/:userID/name/:userName', (req, res) => {
    res.send(`<h1>User Info</h1><p>User ID: ${req.params.userID}, User Name: ${req.params.userName}</p>`);
});

// ------------------------------------------------------------
// Part 3 – HTTP Methods (REST-style on the same path)
// ------------------------------------------------------------
// One URL (/student), different actions based on method. This is common in REST APIs.
app.get('/student', (req, res) => {
    res.send('List of students');
});
app.post('/student', (req, res) => {
    res.send('Student created');
});
app.put('/student', (req, res) => {
    res.send('Student updated');
});
app.delete('/student', (req, res) => {
    res.send('Student deleted');
});

// ------------------------------------------------------------
// Part 4 – Single route parameter
// ------------------------------------------------------------
// :id matches one segment of the path. GET /students/7  →  req.params.id === '7'
app.get('/students/:id', (req, res) => {
    res.send(`Student ID: ${req.params.id}`);
});

// ------------------------------------------------------------
// Part 5 – Multiple route parameters
// ------------------------------------------------------------
// Example: GET /students/3/courses/101  →  req.params.studentId, req.params.courseId
app.get('/students/:studentId/courses/:courseId', (req, res) => {
    res.send(`Student ID: ${req.params.studentId}\nCourse ID: ${req.params.courseId}`);
});

// ------------------------------------------------------------
// Part 6 – Query parameters (from the URL after ?)
// ------------------------------------------------------------
// Example: GET /search?name=Jane&course=Math  →  req.query = { name: 'Jane', course: 'Math' }
app.get('/search', (req, res) => {
    res.send(`Name: ${req.query.name}\nCourse: ${req.query.course}`);
});

// ------------------------------------------------------------
// Challenge – Calculator using query parameters
// ------------------------------------------------------------
// Try: GET /calculator?num1=20&num2=4  (defaults: num1=10, num2=5)
app.get('/calculator', (req, res) => {
    let num1 = req.query.num1 !== undefined ? parseFloat(req.query.num1) : 10;
    let num2 = req.query.num2 !== undefined ? parseFloat(req.query.num2) : 5;

    // Validate: if not a number, send 400 Bad Request and stop
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send('Please provide valid num1 and num2.');
    }

    const add = num1 + num2;
    const subtract = num1 - num2;
    const multiply = num1 * num2;
    const divide = num2 === 0 ? 'Cannot divide by zero' : num1 / num2;

    res.send(`Add: ${add}\nSubtract: ${subtract}\nMultiply: ${multiply}\nDivide: ${divide}`);
});

// ------------------------------------------------------------
// Start the server
// ------------------------------------------------------------
app.listen(port, hostnamae, () => {
    console.log(`Server is running on http://${hostnamae}:${port}`);
});

// Optional: catch-all for unknown routes (404). Must be defined after all other routes.
// app.use((req, res) => {
//     res.status(404).send('<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>');
// });

