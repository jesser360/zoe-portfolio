console.log('sanity check')
$(document).ready(function() {
  $('#zoe-prof').hide();
  $('#about-box').hide();
  $(function() {
    //Enable swiping...
    var cosmicCounterRight = 0;
    var cosmicCounterLeft = 0;
    var totalCosmicCounter = 0;
    $("#cosmic1").swipe( {
      //Generic swipe handler for all directions
      swipe:function(event, direction) {
        if(direction == 'right' ){
            if(totalCosmicCounter < -4 || totalCosmicCounter > 4){
              totalCosmicCounter = 0;
              cosmicCounterRight = 0;
              cosmicCounterLeft = 0;
          } else{
              cosmicCounterRight ++;
              totalCosmicCounter = cosmicCounterRight - cosmicCounterLeft;
              console.log(totalCosmicCounter)
          }
        } else {
            if(totalCosmicCounter < -4 || totalCosmicCounter > 4){
              totalCosmicCounter = 0;
              cosmicCounterRight = 0;
              cosmicCounterLeft = 0;
          } else{
            cosmicCounterLeft ++;
            totalCosmicCounter = cosmicCounterRight - cosmicCounterLeft;
            console.log(totalCosmicCounter)
          }
        }
        if(totalCosmicCounter == 0){
        $("#cosmic1").attr("src","http://i.imgur.com/B2zSOfx.jpg");
      } else if(totalCosmicCounter == 1 || totalCosmicCounter == -1){
        $("#cosmic1").attr("src","http://i.imgur.com/X6xRuLp.jpg");
      } else if(totalCosmicCounter== 2 || totalCosmicCounter == -2){
        $("#cosmic1").attr("src","http://i.imgur.com/FfJpwcg.jpg");
      } else if(totalCosmicCounter == 3 || totalCosmicCounter == -3){
        $("#cosmic1").attr("src","http://i.imgur.com/gfSC0kC.jpg");
      } else if(totalCosmicCounter == 4 || totalCosmicCounter == -4){
        $("#cosmic1").attr("src","http://i.imgur.com/qr5OnKD.jpg");
      } else if(totalCosmicCounter == 5 || totalCosmicCounter == -5){
        $("#cosmic1").attr("src","http://i.imgur.com/Sp3f0Ad.jpg");
      }
      },
      //Default is 75px, set to 0 for demo so any distance triggers swipe
       threshold:0
    });
  });

  $('#zoe-btn').hover(function(){
    var $this = $(this);
    $this.data('Z Z', $this.text());
    $this.text("Zoe Zimski");
    });
  $(window).scroll(function(){
    var $this = $('#zoe-btn');
    $this.data('Zoe Zimski', $this.text());
    $this.text("Z Z");
  })

  var counter = 0;
$("#zoe-btn").click(function(){
  counter++;
  if(counter % 2 === 0){
    $("#about-box").hide(1000);
    $('#zoe-prof').hide(1000);
    $('#insta').hide(1000);
    console.log(counter);
  } else {
    $("#about-box").addClass('about');
    $("#about-box").show(1000);
    $('#zoe-prof').show(1000);
    $('#insta').show(1000);
    $("#cosmic-big").rotate({animateTo:180});

  }
});

$(window).scroll(function(){
    $('#about-box').css('top', $(window).scrollTop());
}).trigger('scroll');

$(window).scroll(function() {
    $('#photo2').animate({top:$(window).scrollTop()});
});
});//close doc ready
