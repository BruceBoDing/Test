var button = true;
var butt ={
  x:50,
  y:50,
  r:30
}

function setup() {
  createCanvas(600,400);
  background(0);
}

function draw() {
  noFill();
  stroke(255);
  //if (mouseX>butt.x && mouseX<butt.x+butt.r && mouseY>butt.y && mouseY<butt.y+butt.r) {
  //  fill(255,0,0);
  //} else {
  //  fill(0);
  //}
  //rect(butt.x,butt.y,butt.r,butt.r);
}

function mousePressed() {
	//if (mouseX>butt.x && mouseX<butt.x+butt.r && mouseY>butt.y && mouseY<butt.y+butt.r) {
    if (button){
      noStroke();
      fill(random(255),random(255),random(255));
      ellipse(random(width),random(height), random(100),random(100));
  } else {
    noStroke();
    fill(random(255),random(255),random(255));
    rect(random(width),random(height), random(100),random(100));
  }
  button = !button;
  }
  
//}