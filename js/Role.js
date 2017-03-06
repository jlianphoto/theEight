function Role(){
  this.h = 0;
  this.role = document.querySelector('.role');
}


Role.prototype.jump = function(h) {
  this.role.style.webkitTransform = `translate(0, ${-h}px)`;
};