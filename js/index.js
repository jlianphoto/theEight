

var analyser ;




function Game(){
  this.timer = null;

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
  this.timer = setTimeout(() => {
          let voiceSize = AudioAPI.getVoiceSize(analyser)
          this.voiceSize = voiceSize/1000;

          if (this.voiceSize > 1) {
            this.role.jump(this.voiceSize);
          }
          
          this.blocks.forEach(function(item){
            item.move(this.voiceSize/100);
          }.bind(this));

          // die
          if (this.blocks[0].deltaX > this.blocks[0].w+290 && this.blocks[1].deltaX < 252 && this.voiceSize<0.1) {
            // console.log("你死了傻逼")
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
            console.log(1)
            var block = new Block();
            this.blocks.push(block);
          }

          this.startGetVoiceSize()
        }, 5)
};






var game = new Game();