const express = require('express');
const app = express();

app.listen(3002, () => {
    console.log(`API server now on port 3002!`);
});