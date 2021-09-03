const express = require('express');
const app = express();

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
	res.render('welcome');
});

// add 'express.json' middleware which will parse JSON requests into JS objects before they reach the route files.
// The mothed '.use' sets up middleware for the Express application
app.use(express.json());
// this parses requests that may use a different content type
app.use(express.urlencoded({ extended: true }));

app.post('/', (req, res) => {
	res.render('index', { name: req.body.name });
});

app.get('/:name', (req, res) => {
	res.render('index', { name: req.params.name });
});

app.listen(4000, () => {
	console.log('🚀 Listening on port 4000 🚀');
});
