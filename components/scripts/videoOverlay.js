$(".playButton").hide();

  $( ".inner2" ).click(function( event ) {
  event.preventDefault();
  $( ".inner" ).fadeOut(1000);
  $(".inner2").fadeOut(1000);
  $(".playButton").fadeIn(1000);

});



$("#playBtn").hide();
$("#muteBtn").hide();
$("#videoReel").prop('muted', false);

$("#mute").click( function (){
    if( $("#videoReel").prop('muted'))
    {
        $("#videoReel").prop('muted', false);
        $("#unmuteBtn").show();
        $("#muteBtn").hide();
    } else {

    $("#videoReel").prop('muted', true);
    $("#unmuteBtn").hide();
    $("#muteBtn").show();

    }

});


$("#play").click(function() {
    var video = $("#videoReel").get(0);

    if ( video.paused ) {
        $("#playBtn").show();
        $("#pauseBtn").hide();
    } else {
        
        $("#playBtn").hide();
        $("#pauseBtn").show();
    }

    return false;
});