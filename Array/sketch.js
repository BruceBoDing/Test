var bubbles = [];

function setup(){
  createCanvas(800, 600);  
}

function mouseDragged(){
  bubbles.push(new Bubble(mouseX, mouseY));
}

function draw(){
  background(0);
  for (var i=0; i<bubbles.length; i++){ 
    bubbles[i].display();
    bubbles[i].move();
  }
}

function mousePressed(){
  for(var i=0; i<bubbles.length; i++){
    bubbles[i].clicked();
  }
}

// ------------------Bubble Constructor----------------------

function Bubble(x,y){
  this.x = x;
  this.y = y;
  this.c = color(255)
  this.life= 255;
  this.display = function() {
    noStroke();
    //strokeWeight(1);
    fill(this.c, this.life);
    ellipse(this.x, this.y, 24,24);
  };
  this.move = function(){
    this.x=this.x+random(-1,1); 
    this.y=this.y+random(-1,1);
    this.life=this.life-30;
  }
  this.clicked= function(){
    var d=dist(mouseX,mouseY,this.x,this.y);
    if (d<12){
      this.c=color(255,100);
    }
  }
}