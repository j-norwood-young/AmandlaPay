var express = require('express');
var bodyParser = require('body-parser');
var config = require("./config");

var app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/', function (req, res) {
	res.send('AmandlaPay');
});

app.post("/thanks", function(req, res) {
	console.log(req.body);
	res.redirect("http://donation-amandla.nationbuilder.com/thanks");
});

app.post("/failed", function(req, res) {
	console.log(req.body);
	res.redirect("http://donation-amandla.nationbuilder.com/failed");
});

app.listen(config.port, function () {
	console.log('AmandlaPay listening on port', config.port);
});