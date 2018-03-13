
var person;
var hero;
//var obstacle;

//function preload(){}

function setup() {
  createCanvas(windowWidth, windowHeight);
  var img = loadImage("assets/Hero.png");
  hero = createSprite(100,height-35);
  hero.addImage(img);
  hero.velocity.x=2;
  hero.velocity.y=0;


}

//function mouseReleased(){
//	if (person.pos.y == height){
//		var jump = createVector(0,-4);
//		person.applyForce(jump);
// 	}
// }

function draw() {
  background(51);
  drawSprites();
  if (hero.position.y>height){
    hero.position.y=height;
  }
  var gravity = 0.9;
  hero.onMousePressed = function (){
    this.velocity.y= hero.velocity.y*-1
  }

  //
	// var gravity = createVector(0,0.1);
	// person.applyForce(gravity);
  //
	// person.update();
	// person.edges();
	// person.display();
  //
	// fill(255, 0, 100);
	// rect (400, height-50, 50, 50);

}
