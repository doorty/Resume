if (!doorty) { var doorty = {}; }
	
doorty.animate = {
	_timer: null,
	_resume: document.getElementById("resume"),
	_ANIMATION_CLASS: "animate",
	
	flip: function(e) {
		doorty.utils.toggleClassName(document.getElementById("resume"), "flip");
	},
	
	animation: function() {
		document.getElementById("resume").className = doorty.animate._ANIMATION_CLASS;
	},
	
	load: function() {
		document.getElementById("resume").addEventListener("click", doorty.animate.flip, false);
			
		this._timer = setTimeout(doorty.animate.animation, 100);
	}
	
}
document.addEventListener("DOMContentLoaded", doorty.animate.load, false);