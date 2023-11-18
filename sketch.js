var s;
var scl = 20;

var food;

function setup() {
  createCanvas(600, 600);
  s = new Snake();
  frameRate(10);
  pickLocation();

  // Retrieve the highest score from local storage
  let storedHighestScore = localStorage.getItem("highestScore");

  // If there's a stored highest score, update the snake's highestScore property
  if (storedHighestScore) {
    s.highestScore = int(storedHighestScore);
  }
}

function pickLocation() {
  var cols = floor(width / scl);
  var rows = floor(height / scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function draw() {
  background(55);

  if (s.eat(food)) {
    pickLocation();
  }
  s.death();
  s.update();
  s.show();

  fill(255, 255, 0);
  ellipse(food.x + scl / 2, food.y + scl / 2, scl, scl);

  // Display the score on the canvas
  fill(255);
  textSize(16);
  document.getElementById('currentScore').innerText = 'Score: ' + s.total;
  document.getElementById('highestScore').innerText = 'Highest Score: ' + s.highestScore;

}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  }
}
