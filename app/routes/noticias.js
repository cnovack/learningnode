module.exports = function(application) {

	application.get('/noticias', function(req, res){

		var connection = application.config.dbConnection();
		var noticiasModel = application.app.models.noticiasModel;

    noticiasModel.getNoticias(connection, function(error, result){
		    console.log(result);
		    console.log(error);
		    res.render("noticias/noticias", {noticias : result});
		});

	});

};