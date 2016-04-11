console.log('May Node be with you');

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + '/'));

app.get('/', (req, res) => {
	res.sendFile(process.cwd() + "/index.html");
});



app.get('/granite', (req, res) => {
	db.collection('materials').find({"material_category_id": "35"}).toArray(function(err, results) {
		console.log(results);
	});
	res.redirect('/');
});

app.get('/marble', (req, res) => {
	db.collection('materials').find({"material_category_id": "36"}).toArray(function(err, results) {
		console.log(results);
	});
	res.redirect('/');
});

app.get('/quartzite', (req, res) => {
	db.collection('materials').find({"material_category_id": "43"}).toArray(function(err, results) {
		console.log(results);
	});
	res.redirect('/');
});


app.listen(3000, () => {
	console.log('Running app.js on 3000');
});
