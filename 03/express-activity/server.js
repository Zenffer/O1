const express = require('express');
const app = express();

const hostnamae = 'localhost';
const port = 3000;

// app.get('/', (req, res) => {
//     res.send('<h1>Welcome to the Home Page, MF</h1>');
// });
app.get('/', (req, res) => {
    res.send('Get request from the home page');
});

app.post('/', (req, res) => {
    res.send('Post request from to the home page');
});

// app.put('/', (req, res) => {
//     res.send('Put request from to the home page');
// });

// app.delete('/', (req, res) => {
//     res.send('Delete request from to the home page');
// });

// Parameterized route
app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1><p>This is the about page.</p>');
});

app.get('user/:userID/name/:userName', (req, res) => {
    res.send(`<h1>User Info</h1><p>User ID: ${req.params.userID}, User Name: ${req.params.userName}</p>`);
});

// Part 3 – HTTP Methods Practice
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

// Part 4 – Route Parameters
app.get(/students/:id', (req, res) => {
    res.send(`Student ID: ${req.params.id}`);
});

// Part 5 – Multiple Route Parameters
app.get('/students/:studentId/courses/:courseId', (req, res) => {
    res.send(`Student ID: ${req.params.studentId}\nCourse ID: ${req.params.courseId}`);
});

// Part 6 – Query Parameters
app.get('/search', (req, res) => {
    res.send(`Name: ${req.query.name}\nCourse: ${req.query.course}`);
});

// Challenge Task – Calculator
app.get('/calculator', (req, res) => {
    let num1 = req.query.num1 !== undefined ? parseFloat(req.query.num1) : 10;
    let num2 = req.query.num2 !== undefined ? parseFloat(req.query.num2) : 5;

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send('Please provide valid num1 and num2.');
    }

    const add = num1 + num2;
    const subtract = num1 - num2;
    const multiply = num1 * num2;
    const divide = num2 === 0 ? 'Cannot divide by zero' : num1 / num2;

    res.send(`Add: ${add}\nSubtract: ${subtract}\nMultiply: ${multiply}\nDivide: ${divide}`);
});

app.listen(port, hostnamae, () => {
    console.log(`Server is running on http://${hostnamae}:${port}`);
});

// app.use((req, res) => {
//     res.status(404).send('<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>');
// });

