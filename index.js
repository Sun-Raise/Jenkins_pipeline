const Joi = require('joi');
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended : true}));
app.use(express.static('homepage'));

// Array
const movies = [
	{ id: 1, name:'Herror'},
	{ id: 2, name:'comedy'},
	{ id: 3, name:'action'},
	{ id: 4, name:'Romantic'},
];

// Get

app.get('/movies', (req, res) => {
	res.send(movies);
});

app.get('/movies/:id', (req, res) => {
	const movie = movies.find(c => c.id === parseInt(req.params.id));
	if(!movie) return res.status(400).send("The Id entered not presentd in the list ");
	res.send(movie);
});

// Post

app.post('/movies',(req, res) => {

	const schema = {
		name: Joi.string().min(3).required()
	};
	const result = Joi.validate(req.body, schema);
	if(result.error){
		res.status(400).send(result.error.details[0].message);
		return;
	}
	
	const movie = {
		id: movies.length + 1,
		name: req.body.name
	};
	movies.push(movie);
	res.send(movie);
});

// Delete
app.delete('/movies/:id',(req, res) => {
	const movie = movies.find(c => c.id === parseInt(req.params.id));
	if(!movie) return res.status(404).send("The Id entered not presentd in the list ");

	const index = movies.indexOf(movie);
	movies.splice(index, 1);

	res.send(index);
});

//PUT/Update

app.put('/movies/:id',(req, res) => {
	const movie = movies.find(c => c.id === parseInt(req.params.id));
	if(!movie) return res.status(404).send("The Id entered not presentd in the list ");

	const schema = {
		name: Joi.string().min(3).required()
	};
	const result = Joi.validate(req.body, schema);
	if(result.error){
		res.status(400).send(result.error.details[0].message);
		return;
	}

	movie.name = req.body.name;
	res.send(movie);
	
});


app.listen(8001);
console.log("Listning 8001 port !!!");
