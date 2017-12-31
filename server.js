/*
* Canvas Socket.io - collaborative canvas board
*
* @author  Raheel Khan <dronzer92@gmail.com>
* @licence The MIT License (MIT)
*/

var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');

app.use('/public', express.static(path.join(__dirname, '/public')));

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html')
});

io.on('connection', function(socket){
  console.log('a user connected');
	socket.on('disconnect', function(){
    console.log('user disconnected');
  });

	socket.on('drawClick', function(data) {
    socket.broadcast.emit('draw', {
      x: data.x,
      y: data.y,
      type: data.type,
			user: data.user
    });
  });

});

http.listen(process.env.PORT || 3000, function(){
  console.log('listening on *:3000');
});
