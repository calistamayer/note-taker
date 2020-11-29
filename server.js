const express = require('express');
const app = express();
const { notes } = require('./db/db.json');

app.get('/api/notes', (req, res) => {
    res.json(notes);
});

app.listen(3002, () => {
    console.log(`API server now on port 3002!`);
});