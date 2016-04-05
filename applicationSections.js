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

// schema for database
var Schema = mongoose.Schema;

var materialSchema = Schema({
	id: {
		type: Number
	},
    material_category_id: {
		type: Number
	},
    material_name: String,
    material_original_name: String,
    material_other_names: String,
    material_description: String,
    material_online_id: String,
    material_country_of_origin: {
		type: String
	},
    main_color: {
		type: String
	},
    page_title: String,
    pattern: {
		type: String
	},
    last_update: {
    	type: Date,
    	default: Date.now
    }
});

var Materials = mongoose.model('Materials', materialSchema);







//insert all materials data in db

Materials.collection.insert(allMaterials, insertAll);

function insertAll(err, docs) {
    if (err) {
        console.log(err);
    } else {
        console.log('All materials were stored in DB');
    }
}