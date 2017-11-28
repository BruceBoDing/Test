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

function setup(){
  createCanvas(windowWidth, windowHeight);
	song=loadSound("1.mp3");
  button = createButton('toggle');
  button.mousePressed(toggleSong);
}

function loaded(){
	song.play();
}

function draw(){
  background(0);
  var vol=amp.getLevel();
  fill(255);
  ellipse(100,100,200,vol*200);
}
