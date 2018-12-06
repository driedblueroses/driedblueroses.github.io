var y = 100;

// The statements in the setup() function 
// execute once when the program begins
function setup() {
  createCanvas(720, 400);  // Size must be the first statement
  stroke(255);     // Set line drawing color to white
  frameRate(30);
}
// The statements in draw() are executed until the 
// program is stopped. Each statement is executed in 
// sequence and after the last line is read, the first 
// line is executed again.
function draw() { 
  // background(random(255),random(255),random(255));   // Set the background to black
  y = y - 1; 
  if (y < 0) { 
    y = height; 
  } 
  line(0, y, width, y);  
} let t = 0; // time variable

function setup() {
  createCanvas(600, 600);
  noStroke();
  frameRate(10);
  fill(random(255),random(255),random(255));
}

function draw() {
  background(random(255),random(255),random(255));
  frameRate(3);// Set the background to black

  // make a x and y grid of ellipses
  for (let x = 0; x <= width; x = x + 30) {
    for (let y = 0; y <= height; y = y + 30) {
      // starting point of each circle depends on mouse position
      let xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
      let yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
      // and also varies based on the particle's location
      let angle = xAngle * (x / width) + yAngle * (y / height);

      // each particle moves in a circle
      let myX = x + 20 * cos(2 * PI * t + angle);
      let myY = y + 20 * sin(2 * PI * t + angle);

      ellipse(myX, myY, 10); // draw particle
    }
  }

  t = t + 0.01; // update time
}