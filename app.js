console.log('May Node be with you');

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://mattp:password@ds061355.mlab.com:61355/gmtestdb');
var db = mongoose.connection;

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});



app.get('/cosmicblack', (req, res) => {
	var cursor = db.collection('materials').find();
	db.collection('materials').find({"material_name": "Cosmic Black"}).toArray(function(err, results) {
		console.log(results);
	});
	res.redirect('/');
});

app.get('/aspenwhite', (req, res) => {
	var cursor = db.collection('materials').find();
	db.collection('materials').find({"material_name": "Aspen White"}).toArray(function(err, results) {
		console.log(results);
	});
	res.redirect('/');
});

app.listen(3000, () => {
	console.log('Running app.js on 3000');
});

