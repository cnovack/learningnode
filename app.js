var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

const dotenv = require('dotenv')
const result = dotenv.config()

var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

consign()
  .include('app/routes')
  .then('config/database.js')
  .then('app/models')
  .then('app/controllers')
  .into(app)

app.listen(3000, function(){
	console.log('Servidor ON')

});