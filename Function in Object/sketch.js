var bubble= {
  x : 300,
  y : 200,
  display: function() {
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, 24,24);
  },
  move: function(){
    this.x=this.x+random(-1,1);
    this.y=this.y+random(-1,1);
  }
};

function setup(){
  createCanvas(800, 600);
}

function draw(){
  background(0);
  bubble.move();
  bubble.display();
}