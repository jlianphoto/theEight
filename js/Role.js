function Role(initHeight){
  this.frame = 0;
  this.h = initHeight;
  this.role = document.querySelector('span');
  
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

	this._setHeight(this.h);

	if (this.frame%2 == 0) {
		this.role.className = "role3";
	}else{
		this.role.className = "role4";
	}

};

Role.prototype.move = function(){
	this.frame ++;
	if (this.frame%2 == 0) {
		this.role.className = "role1";
	}else{
		this.role.className = "role2";
	}
};

Role.prototype.static = function() {
	this.role.className = "";
};


Role.prototype._setHeight = function(h){
  	this.role.style.webkitTransform = `translate(0, ${-h}px)`;
};