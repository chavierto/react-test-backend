const express = require('express');
const app = express();

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
	res.send('No mames');
});

app.get('/:name', (req, res) => {
	res.render('index', { name: req.params.name });
});

app.listen(4000, () => {
	console.log('🚀 Listening on port 4000 🚀');
});
