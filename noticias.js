var http = require('http');

var server = http.createServer( function(req, res){

	var categoria = req.url;

	if(categoria == '/tecnologia'){
			res.end("<html><body>Notícias de tecnologia</body></html>");

	} else if (categoria == '/esportes') {
		res.end("<html><body>Notícias de esportes</body></html>");
	
	} else if (categoria == '/games') {
		res.end("<html><body>Notícias de games</body></html>");

	} else {
		res.end("<html><body>Portal de Notícias</body></html>");
	}

}).listen(3000);