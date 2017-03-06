

var analyser ;




function Game(){
  this.timer = null;

  this.blocks = [];

  this.voiceSize = 0;

  this.role = new Role();
// var block = new Block(320 , 140);
  // this.gameStart();
}


Game.prototype.gameStart = function() {
  var block = new Block(320 , 140);

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


          console.log(this.voiceSize);
          if (this.voiceSize > 1) {
            this.role.jump(this.voiceSize);
          }
          
          this.blocks.forEach(function(item){
            item.move(this.voiceSize/100);
          }.bind(this))

          this.startGetVoiceSize()
        }, 5)
};






var game = new Game();