
window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

var analyser ;
var timer ; 

function Game(){

  this.blocks = [];

  this.voiceSize = 0;

  this.role = new Role(140);
  
  this.gameStart();
}


Game.prototype.gameStart = function() {
  var block = new Block(320 , 140 , 0);

  this.blocks.push(block);
  AudioAPI.start().then(a => {
          analyser = a
          this.startGetVoiceSize();
    })
};

Game.prototype.startGetVoiceSize = function() {

          let voiceSize = AudioAPI.getVoiceSize(analyser)
          this.voiceSize = voiceSize/1000;

          

          if (this.voiceSize>0.5) {

            if (this.voiceSize > 30) {
              this.role.jump(this.voiceSize-30);
            }
            
            this.role.move();
            this.blocks.forEach(function(item){
              item.move(this.voiceSize/100);
            }.bind(this));

          }else{
            this.role.static();
          }
          
          

          // die
          if (this.blocks[0].deltaX > this.blocks[0].w+290 && this.blocks[1].deltaX < 252 && !this.voiceSize) {
            this.role.jumpDown()

          }

          // if delete block
          if (this.blocks[0].deltaX>this.blocks[0].w+320) {
            document.querySelector('.stage').removeChild(this.blocks[0].block);
            this.blocks.shift();
          }


          //change role hight
          if (this.blocks[1] && this.blocks[1].deltaX>252) {
            this.role.h = this.blocks[1].h;
          }

          // create block
          var len = this.blocks.length-1;
          if (this.blocks[len].deltaX>this.blocks[len].w+50) {
            var block = new Block();
            this.blocks.push(block);
          }


          //game over
          if (this.role.h <0) {
            this.gameover();
          }else{
            timer = requestAnimationFrame(this.startGetVoiceSize.bind(this));
          }


};

Game.prototype.gameover = function() {
      cancelAnimationFrame(timer);
};




var game = new Game();