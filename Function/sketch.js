var ball={
  x : 300,
  y : 200,
  xSpeed : 4,
  ySpeed : -3,
  r : 25
}
var c =0;
var ch=10

function setup(){
  createCanvas(600,400);
}

function draw(){
  background(c);
  stroke(255);
  strokeWeight(4);
  noFill();
  if (ball.x+ball.r/2>width || ball.x-ball.r/2<0){
    ball.xSpeed= ball.xSpeed*-1;
    c+=ch;
  }
  if (ball.y+ball.r/2>height || ball.y-ball.r/2<0){
    ball.ySpeed = ball.ySpeed*-1;
    c+=ch;
  }
  if (c>=255 || c<0) {
  ch=ch*-1;
  }
  ellipse(ball.x, ball.y, ball.r, ball.r)
  ball.x=ball.x+ball.xSpeed;
  ball.y=ball.y+ball.ySpeed;
}