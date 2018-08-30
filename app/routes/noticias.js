module.exports = function(app) {

	app.get('/noticias', function(req, res){

		var mysql = require('mysql');

		var connection = mysql.createConnection({
			host : 'localhost',
			user : 'root',
			password : '123456',
			database : 'portal_noticias'
		});

connection.query('select * from noticia', function(err, result){
    console.log(result);
    console.log(err);
    res.send(result);
});
	});
};