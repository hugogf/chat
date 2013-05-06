var app = require('http').createServer(servidor)
var io = require('socket.io').listen(app)
var fs = require('fs')

app.listen(3000);

function servidor (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }
    res.writeHead(200);
    res.end(data);
  });
}
var mensajes = "benvenido al chut<br>";
io.sockets.on('connection', function (socket) {
  socket.emit('actualizarChat', { mensajes: mensajes });
  console.log('/******************/ se conecto un usuario! /******************/' );
  socket.on('enviar', function (data) {
    mensajes += data;
    console.log("/******************/ El dato enviado es --->>"+data+" /******************/");
    socket.emit('recibirMensaje', { mensaje : data  });
    socket.broadcast.emit('recibirMensaje', { mensaje : data  });
  });

});
