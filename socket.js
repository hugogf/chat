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

io.sockets.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });

  socket.on('enviar', function (data) {
    console.log(data);
  });
});