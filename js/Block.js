function Block(w,h,x){

	this.w = w || this.random(300,100);
	this.h = h || this.random(180,94);

	if (x==0) {
		this.x = 0;
		this.deltaX = 320;
	}else{
		this.x = 320;
		this.deltaX = 0;
	}

	
	this.block = document.createElement('div');
	this.block.classList.add('block')

	this.block.style.width = `${this.w}px`;
	this.block.style.height = `${this.h}px`;



	document.querySelector(".stage").appendChild(this.block);
}


// move
Block.prototype.move = function(voice) {
	this.x -= voice;
	this.deltaX += voice;
	this.block.style.webkitTransform = `translate(${this.x}px)`;
};

// return a random number
Block.prototype.random = function(max , min) {
	var Range = max - min;
    var Rand = Math.random();
    return (min + Math.round(Rand * Range));
};