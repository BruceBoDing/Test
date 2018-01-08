
var person;
//var obstacle;

function setup() {
  createCanvas(windowWidth, windowHeight);
	person = new Person();
	//obstacle = createVector
}
function mouseReleased(){
	if (person.pos.y == height){
		var jump = createVector(0,-4);
		person.applyForce(jump);
	}
}

function draw() {
  background(51);
	translate(-person.pos.x+50, 0);

	var gravity = createVector(0,0.1);
	person.applyForce(gravity);

	person.update();
	person.edges();
	person.display();

	fill(255, 0, 100);
	rect (400, height-50, 50, 50);

}
