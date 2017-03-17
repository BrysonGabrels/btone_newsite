//Scrolling SVG Animation.js


$ = require('jquery');

var logo = $('.logo');

$(window).scroll(function() {
	var pos = $(window).scrollTop();
	var opacity = 1 - (pos / 400);
	
	

	logo.css({'opacity': opacity});

	if( opacity > '1') {
		logo.css({'opacity': 1});
	} else if (opacity < '0') {
		logo.css({'opacity':0});
	}
});


//Fire animation when containing element is in view
var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');





