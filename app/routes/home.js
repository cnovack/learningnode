const home = require('../controllers/home');

module.exports = function(app) {

	app.get('/', function(req, res){
    home.index(app, req, res);
	});

}