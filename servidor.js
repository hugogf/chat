var servidor = require('http');
var url = require('url');


function iniciar(enrutar, manejador){
	function arrancaServidor(requiere, respuesta){
		var ruta = url.parse(requiere.url).pathname; 
		console.log("se conecto un wn");
		var contenido = enrutar(manejador, ruta);
		respuesta.writeHead(200, {"Content-Type":"text/html"});
		respuesta.write(contenido);
		respuesta.end();
	}

	servidor.createServer(arrancaServidor).listen(3000);
}

exports.iniciar=iniciar;