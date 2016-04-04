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


// For Loop to insert materials data into db
function insertData(dbName, colName, numberOf) {

	var materials = [];

	for (var i = 0; i <= materials.length; i++) {
		
	}

}









// var materialName = new Materials({
// 	id: "101",
//     material_category_id: "36",
//     material_name: "Calacatta Borghini",
//     material_original_name: "Calacatta Borghini",
//     material_other_names: "Calcutta Gold, Calacata Gold, Calacatta Doro, Calacatta Vagli, Cremo Delicato, Calacatta Michelangelo ",
//     material_description: "Calacatta Borghini Marble is an exclusive white marble with deep grey veining and occasional taupe highlights. Calacatta Borghini Marble is a natural stone from Italy that adds a little more dynamic range to the customary marble color palette. ",
//     material_online_id: null,
//     material_country_of_origin: "105",
//     main_color: "7",
//     page_title: "Calacatta Borghini Marble a Veiny White Countertop Material.",
//     pattern: "0",
//     last_update: "2015-06-19 09:44:32"
// })


// materialName.save(function(err) {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log('this material was saved');
// 	}
// });


// retrieve doc from db
Materials.find({
	material_original_name: "Calacatta Borghini"
}).
limit(1).
exec(function(err, material) {
	if (err) {
		console.log(err)
	} else {
		console.log(material);
	}
});







