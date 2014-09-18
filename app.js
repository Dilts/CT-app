var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var mongoose = require('mongoose');
var app = express();

// app.set('view engine', 'jade');

// Connect to mongoDB
mongoose.connect('mongodb://localhost/ct-app-db');


app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);

app.post('/file-upload', indexController.createUpload);


var server = app.listen(6189, function() {
	console.log('Express server listening on port ' + server.address().port);
});
