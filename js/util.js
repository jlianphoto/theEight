(function(){
	var $ = window.$ = function(el){
		return new $.prototype.init(el);
	}

	$.prototype = {
		init : function(el){
			this.el = document.querySelector(el);
			return this;
		},
		show : function(){
			this.el.style.display = "block";
		},
		hide : function(){
			this.el.style.display = "none";
		},
		css : function(k,v){
			this.el.style[k] = v;
		}
	}

	$.prototype.init.prototype = $.prototype;


})()