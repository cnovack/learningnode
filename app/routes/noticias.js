module.exports = function(application) {

	application.get('/noticias', function(req, res){

		var connection = application.config.dbConnection();
		var noticiasModel = application.app.models.noticiasModel;

<<<<<<< HEAD
<<<<<<< HEAD
		noticiasModel.getNoticias(connection, function(error, result){
=======
    noticiasModel.getNoticias(connection, function(error, result){
>>>>>>> 07faf6833b425c9e7edcab1eb02b59cf1c8727f1
		    console.log(result);
		    console.log(error);
		    res.render("noticias/noticias", {noticias : result});
		});
=======
    var connection = mysql.createConnection({
      host: process.env.MYSQL_SERVER,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE
    });

<<<<<<< HEAD
    connection.query('select * from noticia', function(err, result){
        console.log(result);
        console.log(err);
        res.send(result);
    });

>>>>>>> 78717668d01a153642800a8ea7b2e125084c5d00
=======
>>>>>>> 07faf6833b425c9e7edcab1eb02b59cf1c8727f1
	});

};