  var $btnNewGame = $(".btn-new"),
      $btnAgain   = $(".btn-again"),
      $mask       = $('.mask');

(function () {
  
  var game = new Game();

   $btnNewGame[0].onclick = function(){
      $mask.hide();
      game.gameStart();
   }

   $btnAgain[0].onclick = function(){
      $mask.hide();
      game.gameStart();
   }

})()