/*
* Canvas Socket.io - collaborative canvas board
*
* @author  Raheel Khan <dronzer92@gmail.com>
* @licence The MIT License (MIT)
*/

var canvasApp = canvasApp || {};

(function() {
	'use-strict';
	
	var toolbar = {};
	canvasApp.toolbar = toolbar;
	
	toolbar.init = function() {
		var self = this;
		var ul = document.getElementById('toolbar');
		var evts = self.click;
		for (let key in evts) {
			var elm = document.createElement('li');
			elm.className = "button";
			elm.id = key;
			elm.innerHTML = self.icons[key];
			elm.addEventListener('click', evts[key]);
			
			ul.appendChild(elm);
		}
		
	}
	
	toolbar.selected = 'tool_pencil';
	
	toolbar.icons = {
		tool_select: '<i class="fa fa-mouse-pointer"></i>',
		tool_pencil: '<i class="fa fa-pencil"></i></li>',
		tool_rect: '<i class="fa fa-square"></i>',
		tool_circle: '<i class="fa fa-circle"></i>',
		tool_line: '<i class="fa fa-minus"></i>',
		tool_text: '<i class="fa fa-font"></i>',
		tool_rendom_color: 'Rendom color'
	}
	
	toolbar.click = {
		tool_select: function() {
			
		},
		tool_pencil: function() {
			
		},
		tool_rect: function() {
			
		},
		tool_circle: function() {
			
		},
		tool_line: function() {
			
		},
		tool_text: function() {
			
		},
		tool_rendom_color: function() {
			canvasApp.user.changeColor();
		}
	}
	
	
	
})();
