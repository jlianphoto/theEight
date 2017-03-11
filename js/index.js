  var $btnNewGame = $(".btn-new"),
      $btnAgain   = $(".btn-again"),
      $mask       = $('.mask');

(function () {
  
  var game = new Game();

   $btnNewGame.el.onclick = function(){
      $mask.hide();
      game.gameStart();
   }

   $btnAgain.el.onclick = function(){
      $mask.hide();
      game.gameStart();
   }

})()