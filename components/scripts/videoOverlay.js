$(".playButton").hide();

  $( ".inner2" ).click(function( event ) {
  event.preventDefault();
  $( ".inner" ).fadeOut(1000);
  $(".inner2").fadeOut(1000);
  $(".playButton").fadeIn(1000);

});

$("video").prop('muted', false);

$("#mute").click( function (){
    if( $("#videoReel").prop('muted'))
    {
        $("#videoReel").prop('muted', false);
    }

    else {
    $("#videoReel").prop('muted', true);
    }

});