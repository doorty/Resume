if (!doorty) { var doorty = {}; }
	
doorty.utils = {
	
	hasClassName: function(element, cls) {
		return element.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
	},
	
	addClassName: function(element, cls) {
		if (!this.hasClassName(element, cls)) element.className += " " + cls;
	},
	
	removeClassName: function(element, cls) {
		if (this.hasClassName(element, cls)) {
    	var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
      element.className = element.className.replace(reg, ' ');
    }
	},
	
	toggleClassName: function(element, cls) {
		if(this.hasClassName(element, cls)) {
			this.addClassName(element, cls);
		} else {
			this.removeClassName(element, cls)
		}
	}
	
}