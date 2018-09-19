module.exports = function(){

	this.getNoticias = function(connection, callback){
		connection.query('select * from noticias', callback);
	}

	this.getNoticia = function(connection, callback){
		var sql = 'SELECT * FROM noticias WHERE id_noticia = ' + connection.escape(2);
		connection.query(sql, callback);
	}

	this.salvarNoticia = function(noticia, connection, callback){
		connection.query('insert into noticias set ? ', noticia, callback)
	}

	return this;
}