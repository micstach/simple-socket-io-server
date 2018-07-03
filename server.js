var express = require('express');
var http = require('http');

var app = express();

var io = null;

app.use(express.static(__dirname + '/messanger/dist/messanger'));
app.get('/', function(req, res){
    res.sendFile('/messanger/dist/messanger/index.html')
});

var port = 3000;
var server = http.createServer(app);

server.listen(port, function() {
  console.log('Server is running, port: ' + port);
});

var WebSocketServer = require('websocket').server;

// create the server
wsServer = new WebSocketServer({
  httpServer: server
});

io = require('socket.io').listen(server);

var createChannel = function(channelName, io) {
  console.log('Channel name: ' + channelName)
  var that = this;
  var channel = io.of('/' + channelName);

  channel.on('connection', function (socket) {
    console.log('connected: ' + channelName);
    
    socket.on('message.post', function(text) {
      console.log('message.post: ' + text);
      channel.emit('message.recieve', text.toUpperCase());    
    });

    socket.on('disconnect', function () {
      console.log('disconnect');
    });
  });
};

createChannel('simple-channel', io);
