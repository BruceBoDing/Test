function setup(){
  createCanvas(1000,1000);
}

function draw(){
  background(0);
  noFill();
  strokeWeight(4);
  stroke(255);
  for (var x=0; x<width; x+=10){
    for (var y=0; y<height; y+=20){
      ellipse(x,y,10,10);
    }
  }
}