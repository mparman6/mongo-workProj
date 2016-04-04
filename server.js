var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

app.get('/', function(req, res) {
	res.send('Server is working!');
});

app.listen(PORT, function() {
	console.log('Listening on', PORT)
});


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var Schema = mongoose.Schema;

var Cat = mongoose.model('Cat', { name: String });

var kitty = new Cat({name: 'Zildjian'});
kitty.save(function(err) {
	if (err) {
		console.log(err);
	} else {
		console.log('meow');
	}
});


// var materialSchema = Scheme({
// 	id: {
// 		type: Number
// 	},
//     material_category_id: {
// 		type: Number
// 	},
//     material_name: String,
//     material_original_name: String,
//     material_other_names: String,
//     material_description: String,
//     material_online_id: null,
//     material_country_of_origin: {
// 		type: Number
// 	},
//     main_color: {
// 		type: Number
// 	},
//     page_title: String,
//     pattern: {
// 		type: Number
// 	},
//     last_update: {
//     	type: Date,
//     	default: Date.now
//     }
// });

