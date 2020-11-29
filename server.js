const express = require('express');
const PORT = process.env.PORT || 3002;
const app = express();
const { notes } = require('./db/db.json');

app.get('/api/notes', (req, res) => {
    res.json(notes);
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});