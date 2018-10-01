var mysql = require('mysql');

var connMySQL = function(){
	return mysql.createConnection({
      host : process.env.MYSQL_SERVER,
      user : process.env.MYSQL_USER,
      password : process.env.MYSQL_PASSWORD,
      database :process.env.MYSQL_DATABASE
		});
}

module.exports = function() {
	return connMySQL;
}
