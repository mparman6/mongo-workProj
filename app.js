console.log('May Node be with you');

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});



app.get('/cosmicblack', (req, res) => {
	var cursor = db.collection('materials').find();
	db.collection('materials').find({"id": "499"}).toArray(function(err, results) {
		console.log(results);
	});
	db.collection('materialphotos').find({"material_id": "499"}).toArray(function(err, results2) {
		console.log(results2);
	});
	res.redirect('/');
});



app.listen(3000, () => {
	console.log('Running app.js on 3000');
});


