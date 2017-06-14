console.log('sanity check')
$(document).ready(function() {

  $(function() {
    $("#cosmic1").swipe( function(){
      //Generic swipe handler for all directions
      // swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
      //   $(this).text("You swiped " + direction );
      console.log('swiped');
    })
    });

});//close doc ready
