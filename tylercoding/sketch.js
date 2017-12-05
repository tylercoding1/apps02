


function setup() { 
  createCanvas(600, 400);
} 

function draw() { 
  background(250,250,100);
}
function draw() {
	//ellipse
	noStroke();
	fill(850,20,200,50)
	ellipse(mouseX, mouseY, 75,75)
}
function mousePressed() {
	background(80,80,37) 
}

//for red, green, and blue color values
var r,g,b;


function setup() {
	createCanvas (600,400); 
	//Pick colors randomly
	r=random(255);
	g=random(255);
	b=random(255);
	//Draw a circle
	strokeWeight(200)
	stroke(r,g,b);
	fill(r,g,200,127);
	background(0,0,0);
	frameRate(3);
}
function draw() {
}
function mouseWheel() {
	background (255,-0,255);
}
function mouseDragged () {
	noStroke ();
	ellipse(mouseX,mouseY, 20,20,100)
	fill(200,5,2)
}


