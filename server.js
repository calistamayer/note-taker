const fs = require('fs');
const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 3002;
const app = express();
const { notes } = require('./db/db.json');

app.use(express.static('public'));

// api route for notes data
app.get('/api/notes', (req, res) => {
    res.json(notes);
});

// html route for homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

// html route for notes page
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.post('/api/notes', (req, res) => {
    console.log(req.body);
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});