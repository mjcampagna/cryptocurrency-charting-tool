const path = require('path');

const port = process.env.PORT || 7777;

const express = require('express');
const app = express();

app.use(express.static(path.resolve(__dirname, '../dist')));

app.listen(port, console.log(`Listening on port ${port}...`));
