function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(50);
  fill(255);
  textSize(32);
  text("April, I miss you so much!!!Please come back to me",
    mouseX, mouseY, 200, 200);
  if (mouseIsPressed) {
    noFill();
    stroke(0, 255, 0);
    rect(mouseX, mouseY, 200, 200);
  }
}