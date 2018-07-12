const path = require('path');

const port = process.env.PORT || 7777;

const express = require('express');
const app = express();

require('es6-promise').polyfill();
require('isomorphic-fetch');

app.use(express.static(path.resolve(__dirname, '../dist')));

app.listen(port, console.log(`Listening on port ${port}...`));
