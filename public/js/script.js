/*
* Canvas Socket.io - collaborative canvas board
*
* @author  Raheel Khan <dronzer92@gmail.com>
* @licence The MIT License (MIT)
*/

var canvasApp = canvasApp || {};

(function(){
	'use-strict';

	var elements = {};
	canvasApp.$elements = elements;

	/*
	* @summary: Initilize Application
	*/
	canvasApp.init = function() {
		var container = document.getElementById('canvas-container');
		var user = this.createUser();
		elements.container = container;

		elements.canvas = document.createElement('canvas');
		elements.canvas.height = 400;
		elements.canvas.width = 800;
		container.appendChild(elements.canvas);
		elements.ctx = elements.canvas.getContext("2d");
		elements.ctx.fillStyle = "solid";
		elements.ctx.strokeStyle = user.color;
		elements.ctx.lineWidth = 3;
		elements.ctx.lineCap = "round";
		
		canvasApp.socket = new Socket(user);
		
		canvasApp.toolbar.init();
	}

	/*
	* @summary: Create new user
	*/
	canvasApp.createUser = function() {
		var user = {
			id: new Date().getTime(),
			color: canvasApp.utilities.getRandomColor(),
			changeColor: function() {
				this.color = canvasApp.utilities.getRandomColor();
			}
			
		}

		canvasApp.user = user;

		return user;
	}

	/*
	* @summary: Get User
	*/
	canvasApp.getUser = function() {
		return this.user;
	}

	/*
	* @summary: Draw on canvas
	*/
	canvasApp.draw = function(data) {
		console.log('draw() => ', data);

		if (data.user.color) {
			elements.ctx.strokeStyle = data.user.color;
		}

		if (data.type === "dragstart") {
			elements.ctx.beginPath();
			return elements.ctx.moveTo(data.x, data.y);
		} else if (data.type === "drag") {
			elements.ctx.lineTo(data.x, data.y);
			return elements.ctx.stroke();
		} else {
			return elements.ctx.closePath();
		}
	};


	


})();
