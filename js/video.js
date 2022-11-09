var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = this.document.querySelector("#player1")
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
	document.querySelector("#volume").innerHTML = video.volume *100 + "%"
	video.play()
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down", video.playbackRate*=0.9);
	video.playbackRate*=0.9;
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up", video.playbackRate*=1.1);
	video.playbackRate*=1.1;
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	video.currentTime+=10;
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute");
	if (video.muted === false){
		video.muted = true;
	}
	else{
		video.muted = false;
	}
});

document.querySelector("#slider").addEventListener("click", function(e) {
	console.log("Volume");
	video.volume = e.currentTarget.value / 100;
	var volume = document.getElementById("slider").value;
	document.getElementById("volume").innerHTML = volume + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old School");
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original");
	video.classList.remove("oldSchool");
});

