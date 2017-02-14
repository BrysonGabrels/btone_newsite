//Scrolling SVG Animation.js


$ = require('jquery');

var logo = $('.logo');

$(window).scroll(function() {
	var pos = $(window).scrollTop();
	var opacity = 1 - (pos / 600);
	$('.testing').text("p" + opacity);
	

	logo.css({'opacity': opacity});

	if( opacity > '1') {
		logo.css({'opacity': 1});
	} else if (opacity < '0') {
		logo.css({'opacity':0});
	}

});