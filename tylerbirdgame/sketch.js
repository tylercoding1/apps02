//This sets up your classes
var bird;
var pipes = [];

//This sets up your canvas and introduces classes
function setup() {
  createCanvas(400, 600);
  bird = new Bird();
  pipes.push(new Pipe());
	

}
 
	
	


//This sets up your objects to be drawn, including pipes, bird,etc 

function draw() {
  background(0);
	textSize(30,30,50,50)
	text(frameCount,100,300,400);

	

  for (var i = pipes.length-1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(bird)) {
      console.log("HIT");
       text("GAME OVER ",50,50);  
        textSize(30,30,50,30)
			
			score = 0
		
		}


    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
  }

	//This provides frames and production of new pipes
  bird.update();
  bird.show();
  if (frameCount % 100 == 0) {
    pipes.push(new Pipe());

		}
}

//This confirms that when you click the bird moves
function mousePressed() {
  
    bird.up();
    //console.log("");
 

 


}

//This provides rules for bird atributes, motion, color,etc
function Bird() {
  this.y = height/2;
  this.x = 64;

  this.gravity = 0.6;
  this.lift = -15;
  this.velocity = 0;

  this.show = function() {
    fill(0,0,200);
    ellipse(this.x, this.y, 50, 32);
		ellipse(this.x+9,this.y-10,10,10)
		ellipse(this.x+20,this.y-2,15,10)
		
  }

	//This provides the function for intersecting the pipes
  this.up = function() {
    this.velocity += this.lift;
  }

  this.update = function() {
    this.velocity += this.gravity;
    this.velocity *= 0.9;
    this.y += this.velocity;

    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  }
}

//This sets up pipe atributes, color, size, and random height
function Pipe() {
  this.top = random(height/2);
  this.bottom = random(height/2);
  this.x = width;
  this.w = 20;
  this.speed = 2;

  this.highlight = false;

  this.hits = function(bird) {
    if (bird.y < this.top || bird.y > height - this.bottom) {
      if (bird.x > this.x && bird.x < this.x + this.w) {
        this.highlight = true;
        return true;
      }
		
			
    }
    this.highlight = false;
    return false;
  }
//This shows the bird, pipes, etc. and stops bird at the top and bottom of screen
  this.show = function() {
    fill(255,150,0);
    if (this.highlight) {
      fill(255, 0, 0);
    }
    rect(this.x, 0, this.w, this.top);
    rect(this.x, height-this.bottom, this.w, this.bottom);
  }

  this.update = function() {
    this.x -= this.speed;
  }

  this.offscreen = function() {
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }
  }


}

