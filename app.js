var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');

const dotenv = require('dotenv')
const result = dotenv.config()

if (result.error) {
  throw result.error
}

console.log(result.parsed)
console.log(process.env)

var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(bodyParser.urlencoded({extended: true}));

consign()
  .include('app/routes')
  .then('config/database.js')
  .then('app/models')
  .into(app)

app.listen(3000, function(){
	console.log('Servidor ON')

});