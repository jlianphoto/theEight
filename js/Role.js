function Role(initHeight){
  this.frame = 0;
  this.h = initHeight;
  this.role = document.querySelector('.role');
  
  this._setHeight(this.h);


}


Role.prototype.jump = function(h) {
	var h = this.h +h 
  	this._setHeight(h);
};

Role.prototype.jumpDown = function() {

	this.frame++;
	if (this.frame%2 == 0) {
		this.h--;
	}

	if (this.h <0) {
		console.log("你死了");
	}

	this._setHeight(this.h);

};




Role.prototype._setHeight = function(h){
  	this.role.style.webkitTransform = `translate(0, ${-h}px)`;
};