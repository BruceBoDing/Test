var bubbles = [];

function setup(){
  createCanvas(windowWidth, windowHeight);  
}

function mousePressed(){
  bubbles.push(new Bubble(mouseX, mouseY));
}

function draw(){
  background(0);
  for (var i=bubbles.length-1; i>=0; i--){ 
    bubbles[i].display();
    bubbles[i].jump();
    if (bubbles[i].isDone()){
      bubbles.splice(i,1);
    }
  }
}


// ------------------Bubble Constructor----------------------

function Bubble(x,y){
  this.x = x;
  this.y = y;
  //this.life= 255;
  this.speed=0;
  this.gravity=0.98;
  this.bounce=-1;
  this.display = function() {
    //noStroke();
    stroke(255);
    strokeWeight(1);
    fill(255, this.life);
    ellipse(this.x, this.y, 24,24);
  };
  // this.move = function(){
  //   this.x=this.x+random(-1,1); 
  //   this.y=this.y+random(-1,1);
  //   this.life--;
  // }
  this.jump = function(){
    this.speed+=this.gravity;
    this.y+=this.speed;
    if (this.y>height-12){
      this.y=height-12;
      this.speed*=-0.9;
    } 
  }

  this.isDone = function(){
    if (this.speed=0){
      return true;
    } else {
      return false;
    }
  }
  // this.isFinished = function(){
  //   if (this.life < 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  //this.clicked= function(){
    //var d=dist(mouseX,mouseY,this.x,this.y);
    //if (d<12){
   //   this.c=color(255,100);
    //}
  //}
}