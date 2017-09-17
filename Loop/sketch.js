var ballX = 100;
var ballY = 0;
var h = 50;

//create a variable for speed
var speedY = 0;

function setup() {
  createCanvas(400,400);
  smooth();
  ellipseMode(CORNER);

}

function draw() {
  //clear the background and set the fill colour
  background(0);
  fill(255);
  
  //draw the circle in it's current position
  ellipse(ballX, ballY, h,h);
 
  //add a little gravity to the speed
  speedY = speedY + 0.5;  
  
  //add speed to the ball's
  ballY = ballY + speedY; 
  
  
  if (ballY > height - h) {
    // set the position to be on the floor
    ballY = height - h;
    // and make the y speed 90% of what it was,
    // but in the opposite direction
    speedY = speedY * -0.9;
    
    //switch the direction
    //speedY = speedY;
  }
  else if (ballY <= 0) { 
    // if the ball hits the top,
    // make it bounce off
    speedY = -speedY;
  }
  
}