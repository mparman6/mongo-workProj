{
    "id": "101",
    "photo": {
        "$ref": "photos",
        "$id": ObjectId("57041fc125e2433c200987ff")
    },
    "material_category_id": "36",
    "material_name": "Calacatta Borghini",
    "material_original_name": "Calacatta Borghini",
    "material_other_names": "Calcutta Gold, Calacata Gold, Calacatta Doro, Calacatta Vagli, Cremo Delicato, Calacatta Michelangelo ",
    "material_description": "Calacatta Borghini Marble is an exclusive white marble with deep grey veining and occasional taupe highlights. Calacatta Borghini Marble is a natural stone from Italy that adds a little more dynamic range to the customary marble color palette. ",
    "material_online_id": null,
    "material_country_of_origin": "105",
    "main_color": "7",
    "page_title": "Calacatta Borghini Marble a Veiny White Countertop Material.",
    "pattern": "0",
    "last_update": "2015-06-19 09:44:32"
  }

  var Search = function(materialName) {
    var documents = [];
     db.collection('materials').find({"material_name": materialName}, (function(err, results) {
        documents.push(results);
    });

  }


   <div class="container">
     <div class="row">  
      <div class="col m3">
          <a href="/aspenwhite"><div class="card">
            <div class="card-image small">
                <img src="http://marble.com/uploads/materials/68/300X300/thumbnail/Aspen-White_RIKXCOOHk7PvydMw4olZ.jpg">
                <span class="card-title">Aspen White</span>
              </div>
            </div>
          </a>
        </div>

        <div class="col m3">
          <a href="/cosmicblack"><div class="card">
            <div class="card-image small">
                <img src="http://marble.com/uploads/materials/499/300X300/thumbnail/Cosmic-Black_APeruB9I056YsF3mZ0sT.jpg">
                <span class="card-title">Cosmic Black</span>
              </div>
            </div>
          </a>
        </div>

        <div class="col m3">
          <a href="/"><div class="card">
            <div class="card-image small">
                <img src="http://marble.com/uploads/materials/694/300X300/thumbnail/Sucuri-White_xrE3GtgvlAnI6G6q4pmB.jpg">
                <span class="card-title">Sucuri White</span>
              </div>
            </div>
          </a>
        </div>

        <div class="col m3">
          <a href="/"><div class="card">
            <div class="card-image small">
                <img src="http://marble.com/uploads/materials/917/300X300/thumbnail/Labradorite-Green_oU9fNhvGaaTaGyZt7XSn.jpg">
                <span class="card-title">Labradorite Green</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>