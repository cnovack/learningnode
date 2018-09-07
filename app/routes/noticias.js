module.exports = function(application) {

	application.get('/noticias', function(req, res){

		var connection = application.config.dbConnection();
		var noticiasModel = application.app.models.noticiasModel;

    noticiasModel.getNoticias(connection, function(error, result){
		    console.log(result);
		    console.log(error);
		    res.render("noticias/noticias", {noticias : result});
		});

    var connection = mysql.createConnection({
      host: process.env.MYSQL_SERVER,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE
    });

	});
};