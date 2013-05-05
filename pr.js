var servidor = require('http');
var url = require('url');

	function arrancaServidor(requiere, respuesta){

		respuesta.writeHead(200, {"Content-Type":"text/html"});
		respuesta.write("<h1>"+requiere.headers.host+"</h1>");
		respuesta.end();
	}

	servidor.createServer(arrancaServidor).listen(3000);