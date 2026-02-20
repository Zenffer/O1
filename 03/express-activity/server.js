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

app.get('/search', (req, res) => {
    res.send(`ID: ${req.query.userID},
        Name: ${req.query.name}`);
});

app.listen(port, hostnamae, () => {
    console.log(`Server is running on http://${hostnamae}:${port}`);
});

// app.use((req, res) => {
//     res.status(404).send('<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>');
// });

