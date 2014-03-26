var express = require('express')
var app = express()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server)
  , path = require('path');
var messageSave = require('./lib/message/save')

app.use(express.bodyParser());
app.set('views', __dirname + '/public');
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./lib/message'))

server.listen(3000);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/public/index.html');
});

io.sockets.on('connection', function (socket) {
  socket.emit('message', { message: 'Welcome to BigChat' });
  socket.on('message', function (data) {
  	var messageData = new Object();
  	messageData.sender = data.sender;
  	messageData.content = data.message;
  	messageSave.persist(messageData);
  	socket.broadcast.emit('message', { message: data.message, sender: data.sender});
  });
});