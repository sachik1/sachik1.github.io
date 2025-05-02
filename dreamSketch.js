let starX = 300;
let starY = 300;
let starSize = 30;
let score = 0;
let bgStars = [];

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER, CENTER);
  textSize(18);
  noCursor();
  for (let i = 0; i < 100; i++) {
    bgStars.push([random(width), random(height), random(1, 3)]);
  }
}

function draw() {
  background(10, 10, 30); 
  drawBackgroundStars();
  drawMessage();
  chaseDreams();

  fill(255);
  text("Dreams reached: " + score, width / 2, 30);
}

function drawBackgroundStars() {
  noStroke();
  fill(255, 150);
  for (let s of bgStars) {
    ellipse(s[0], s[1], s[2]);
  }
}

function drawMessage() {
  fill(200);
  textStyle(ITALIC);
  text(
    "Every time we reach one dream, a new one begins to call us forward. \nThat cycle continues on forever.",
    width / 2,
    height - 30
  );
  textStyle(NORMAL);
}

function chaseDreams() {
  let distToStar = dist(starX, starY, mouseX, mouseY);

  if (distToStar < starSize / 2) {
    starX = random(50, width - 50);
    starY = random(80, height - 80);
    score++;
  }

  stroke(255, 100);
  line(starX, starY, mouseX, mouseY);

  noStroke();
  fill(255, 255, 0, 150); 
  ellipse(starX, starY, starSize + 15, starSize + 15);

  fill(255, 255, 0);
  ellipse(starX, starY, starSize, starSize);

  fill(255);
  ellipse(mouseX, mouseY, 10, 10); 
}
