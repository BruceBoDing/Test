var bubbles = [];

function setup(){
  createCanvas(800, 600);  
}

function mousePressed(){
  bubbles.push(new Bubble(mouseX, mouseY));
  bubbles[bubbles.length-1].changeColor();
}

function draw(){
  background(0);
  for (var i=0; i<bubbles.length; i++){ 
    bubbles[i].display();
    bubbles[i].jump();
  }
}
