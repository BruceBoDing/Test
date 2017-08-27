var button = true;

function setup() {
  createCanvas(600,400);
}

function draw() {
	if (button){
		background(0);
	} else {
		background(0,255,0);
	}
  noFill();
  stroke(255);
  
  if (mouseX>300 && mouseX<400 && mouseY>200 && mouseY<300) {
    fill(255,0,0);
  }
  rect(300,200,100,100);
}

function mousePressed() {
	if (mouseX>300 && mouseX<400 && mouseY>200 && mouseY<300) {
    button = !button;
  }
}