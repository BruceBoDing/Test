var color = {
  r : 255,
  g : 0,
  b : 190
};

function setup() {
  createCanvas(640, 480);
  background(0);
}

function draw() {
  color.r = map(mouseX, 0, width, 0, 255);
  color.g = 0;
  color.b = map(mouseY, 0, height, 0, 255);
  noStroke();
  if (mouseIsPressed){
    fill (color.r, color.g, color.b);
  } else {
    noFill();
  }
  ellipse (mouseX, mouseY, 10, 10);
}