

var analyser ;




function Game(){
  this.timer = null;

  // this.gameStart();
}


Game.prototype.gameStart = function() {

  AudioAPI.start().then(a => {
          analyser = a
          this.startGetVoiceSize();
    })
};

Game.prototype.startGetVoiceSize = function() {
  this.timer = setTimeout(() => {
          const voiceSize = AudioAPI.getVoiceSize(analyser)
          this.voiceSize = voiceSize

          this.startGetVoiceSize()
        }, 5)
};






new Game();