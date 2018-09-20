module.exports.index = function(application, req, res){

	var connection = application.config.database;
	var noticiasModel = new application.app.models.noticiasDAO(connection);

	noticiasModel.get5UltimasNoticias(function(error, result){
		res.render("home/index", {noticias : result});
	});

	
}