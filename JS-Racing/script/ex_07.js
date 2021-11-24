
window.addEventListener('DOMContentLoaded', function() {

	function draw(){
	    var canvas = document.querySelector("footer div canvas");
	    canvas.style.backgroundColor = "white"
	    if (canvas.getContext) {
		   var ctx = canvas.getContext('2d');
		   ctx.beginPath();
		   ctx.moveTo(6, 6);
		   ctx.lineTo(14, 10);
		   ctx.lineTo(6, 14);
		   ctx.fill();
	    }

	    var audio = new Audio('triangle.ogg');
	    var pause = document.querySelector("footer div:nth-child(2)").children[0];
	    var stop = document.querySelector("footer div:nth-child(2)").children[1];
	    var mute = document.querySelector("footer div:nth-child(2)").children[2];
	    canvas.addEventListener("click", function(){
		   audio.play();
	    })
	    pause.addEventListener("click", function(){
		   audio.pause();
	    })
	    stop.addEventListener("click", function(){
		  audio.load();
	    })
	    mute.addEventListener("click", function(){
		   if(audio.muted == true) {
			  audio.muted = false;
		   }
		   else if(audio.muted == false) {
			  audio.muted = true;
		   }
	    })
	}    
	draw();
 })

