var song;
var button;
var amp;

function toggleSong(){
	if (song.isPlaying()){
		song.pause();
	} else{
		song.play();
	}
}

function preload(){
	song=loadSound("1.mp3");
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  button = createButton('toggle');
  button.mousePressed(toggleSong);
  song.play();
  amp = new p5.Amplitude();
}

function draw(){
  background(0);
  var vol=amp.getLevel();
  fill(255);
  ellipse(100,100,200,vol*200);
}