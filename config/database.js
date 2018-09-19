var mysql = require('mysql');

var connMySQL = function(){
	console.log('A Conexão com o BD foi estabelecida');
	return mysql.createConnection({
      host : process.env.MYSQL_SERVER,
      user : process.env.MYSQL_USER,
      password : process.env.MYSQL_PASSWORD,
      database :process.env.MYSQL_DATABASE
		});
}

module.exports = function() {
	console.log('O autoload carregou o módulo de conexão com o BD')
	return connMySQL();
}
