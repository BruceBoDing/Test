var x=0;
var speed=10;
var r=20;
var a=255;
var b=255;
var c=255;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  noStroke();
  fill(a,b,c);
  ellipse(x, 200, r, r);
  if (x+r/2>=width){
    speed=-10;
    a=a-10;
    r=r+10;
  } else if (x-r/2<=0){
    speed=10;
    c=c-10;
  }
  x=x+speed;
}