const path = require('path');

const port = process.env.PORT || 7777;

const express = require('express');
const app = express();

require('es6-promise').polyfill();
require('isomorphic-fetch');

app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('/api', (req, res) => {
	fetch('https://api.coindesk.com/v1/bpi/currentprice.json', {
		method: 'GET'
	})
	.then( res => res )
	.then( json => {
		res.status(200).send('hi');
	})
	.catch( err => console.log(err));
});

app.listen(port, console.log(`Listening on port ${port}...`));
