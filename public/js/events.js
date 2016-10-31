
var canvasApp = canvasApp || {};
(function() {
	'use-strict';


	/*
	Draw Events
	*/
	$('canvas').live('drag dragstart dragend',function(e) {
		var currentElement, totalOffsetX, totalOffsetY, type, x, y;
		totalOffsetX = 0;
		totalOffsetY = 0;
		currentElement = e.currentTarget;
		type = e.handleObj.type;
		while (true) {
			totalOffsetX += currentElement.offsetLeft - currentElement.scrollLeft;
			totalOffsetY += currentElement.offsetTop - currentElement.scrollTop;
			currentElement = currentElement.offsetParent;
			if (!(currentElement != null)) {
				break;
			}
		}
		x = e.pageX - totalOffsetX;
		y = e.pageY - totalOffsetY;

		var obj = {
			x: x,
			y: y,
			type: type,
			user: canvasApp.user
		}
		canvasApp.draw(obj);
		canvasApp.socket.emit('drawClick', obj);
	});


	/* Main Menu */
	$('.menu > li').click(function(e){
		
		$('.menu > li').removeClass('open');
		$(this).addClass('open');
		
	});
	
	$(document).click(function(e){
		// console.log('ee',$(e.target).parents('.menu').length);
		
		// Hide menu if click anywhere else
		if ($(e.target).parents('.menu').length == 0) {
			$('.menu > li').removeClass('open');
		}
	});
	
	
	$('#tool_rendom_color').click(function(e){
		canvasApp.user.changeColor();
	});
	
})();
