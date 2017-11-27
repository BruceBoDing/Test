function Bubble(x,y){
  this.x = x;
  this.y = y;
  this.r = 24;
  //this.life= 255;
  this.speed=0;
  this.gravity=0.98;
  this.bounce=-1;
  this.c = color(255)
  
  this.display = function() {
    noStroke();
    // stroke(255);
    // strokeWeight(1);
    fill(this.c, 100);
    ellipse(this.x, this.y, this.r*2,this.r*2);
  }


  this.move = function(){
    this.x=this.x+random(-1,1); 
    this.y=this.y+random(-1,1);
    //this.life--;
  }

  this.changeColor = function(){
    this.c= color(random(255),random(255), random(255));
  }

  this.jump = function(){
    this.speed+=this.gravity;
    this.y+=this.speed;
    if (this.y>height-this.r){
      this.y=height-this.r;
      this.speed*=-0.9;
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