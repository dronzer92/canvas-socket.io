

var canvasApp = canvasApp || {};

(function(){
	'use-strict';

	var elements = {};
	var socket = io();
	canvasApp.$elements = elements;
	canvasApp.socket = socket;

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


	/*
	* @summary: Socket Draw
	*/
	socket.on('draw', function(data){
		return canvasApp.draw(data);
	});


})();
