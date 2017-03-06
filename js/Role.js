function Role(){
  this.frame = 0;
  this.h = 0;
  this.role = document.querySelector('.role');
}


Role.prototype.jump = function(h) {
  this.role.style.webkitTransform = `translate(0, ${-h}px)`;
};

Role.prototype.jumpDown = function() {

	var animateFrame = requestAnimationFrame(this.jumpDown.bind(this));

	this.frame++;
	if (this.frame%2 == 0) {
		this.h++;
	}

	if (this.h >=140) {
		console.log("你死了");
		window.cancelAnimationFrame(animateFrame);
	}
	this.role.style.webkitTransform = `translate(0, ${this.h}px)`;

};