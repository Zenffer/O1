const express = require('express');
const app = express();

const hostnamae = 'localhost';
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Home Page</h1>');
});

app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1><p>This is the about page.</p>');
});

app.listen(port, hostnamae, () => {
    console.log(`Server is running on http://${hostnamae}:${port}`);
});