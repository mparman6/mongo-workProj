
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


// Save single material documents into database
var newMaterial = {
	"id": "500",
    "material_category_id": "35",
    "material_name": "Cosmic Black",
    "material_original_name": "Cosmic Black",
    "material_other_names": "",
    "material_description": "Cosmic Black is a beautiful dark granite with a wide range of shades and infrequent patches of white, amber, and burgundy throughout. It is ideal as a kitchen countertop, bathroom vanity, fireplace surround, and floor. ",
    "material_online_id": null,
    "material_country_of_origin": "32",
    "main_color": "1",
    "page_title": "Cosmic Black Granite Kitchen Countertop, Bathroom Vanity",
    "pattern": "0",
    "last_update": "2015-06-22 13:09:47"
};


Materials.collection.insert(newMaterial, insertNew);

function insertNew(err, docs) {
	if (err) {
		console.log(err);
	} else {
		console.log('New material was stored in DB');
	}
}


// retrieve new duplicate document from db
Materials.find({
	"material_name": "Cosmic Black"
}).
limit(5).
exec(function(err, material) {
	if (err) {
		console.log(err)
	} else {
		console.log(material);
	}
});

