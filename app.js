console.log('sanity check')
$(document).ready(function() {

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

$("#zoe-btn").click(function(){
  console.log('clicked');
});



});//close doc ready
