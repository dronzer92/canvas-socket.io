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
	
	toolbar.selected = 'pencli';
	
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
