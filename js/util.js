(function(){
	var $ = window.$ = function(el){
		return new $.prototype.init(el);
	}

	$.prototype = {
		init : function(el){
			var els = document.querySelectorAll(el);
			for (var i = 0; i < els.length; i++) {
				this[i] = els[i];
			}
			this.length = els.length;
			return this;
		},
		show : function(){
			for (var i = 0; i < this.length; i++) {
				this[i].style.display = "block";
			}
			return this;
		},
		hide : function(){
			for (var i = 0; i < this.length; i++) {
				this[i].style.display = "none";
			}
			return this;
		},
		css : function(k,v){
			for (var i = 0; i < this.length; i++) {
				this[i].style[k] = v;
			}
			return this;
		}
	}

	$.prototype.init.prototype = $.prototype;


})()