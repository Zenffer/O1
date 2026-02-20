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


app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1><p>This is the about page.</p>');
});

app.listen(port, hostnamae, () => {
    console.log(`Server is running on http://${hostnamae}:${port}`);
});