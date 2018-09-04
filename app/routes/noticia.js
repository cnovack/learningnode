module.exports = function(app) {

	app.get('/noticia', function(req, res){

		var connection = app.config.dbConnection();
		var noticiasModel = app.app.models.noticiasModel


		noticiasModel.getNoticia(connection, function(error, result){
		    console.log(result);
		    console.log(error);
		    res.render("noticias/noticia", {noticia : result});
		});
	});

};