/*
* Canvas Socket.io - collaborative canvas board
*
* @author  Raheel Khan <dronzer92@gmail.com>
* @licence The MIT License (MIT)
*/

var canvasApp = canvasApp || {};

var Socket = function(user) {
	
	var socket = io();
	
	/*
	* @summary: Socket Draw
	*/
	socket.on('draw', function(data){
		return canvasApp.draw(data);
	});
	
	
	return socket;
}
