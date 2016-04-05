var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

app.get('*', function(req, res) {
  res.sendFile(process.cwd() + '/index.html')
});

app.listen(PORT, function() {
	console.log('Listening on', PORT)
});