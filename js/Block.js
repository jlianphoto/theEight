function Block(){

	this.w = this.random(300,100);
	this.h = this.random(180,100);

	this.block = document.createElement('div');
	this.block.classList.add('block')
	console.log(this.block)
	this.block.style.width = `${this.w}px`;
	this.block.style.height = `${this.h}px`;



	document.querySelector(".stage").appendChild(this.block);

	


}

// return a random number
Block.prototype.random = function(max , min) {
	var Range = max - min;
    var Rand = Math.random();
    return (min + Math.round(Rand * Range));
};