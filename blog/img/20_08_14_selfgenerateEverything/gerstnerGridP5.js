function setup() {
	let cnv = createCanvas(640, 400);
 	cnv.parent('gerstnerGrid');

  	frameRate(60);
  	noLoop(); //calls draw() once.
}

function draw() {
  background(0, 0, 0, 0);
  rectMode(RADIUS);
  noFill();
  stroke('black');
  strokeWeight(1);

  push();
  translate(185, 220);
  drawGrid(300);
  pop();

  push();
  translate(455, 220);
  scale(-1, 1)
  drawGrid(300);
  pop();
}

function drawGrid(size) {
  s = size;

  push();
  fourSq(s);
  pop();

  push();
  scale(1.01);
  fiveSq(s);
  pop();

  push();
  scale(1.07);
  sixSq(s);
  pop();
}

function fourSq(s) {
  n = 7;
  rectMode(CORNER);
  noStroke();
  fill("#ff8c69");
  rect(-122, -166, 258, 30);
  rect(-122, -122, 258, 245);
  noFill();
  stroke('black');

  rect(-122, -166, 244, 30);

  rectMode(RADIUS);
  for (i = 1; i < n; i++) {
    for (j = 1; j < n; j++) {
      push();
      translate(s / 2 * -1, s / 2 * -1);
      rect(s / n * i, s / n * j, 15);
      pop();
    }
  }
}

function fiveSq(s) {
  n = 6;
  for (i = 1; i < n; i++) {
    for (j = 1; j < n; j++) {
      push();
      translate(s / 2 * -1, s / 2 * -1);
      rect(s / n * i, s / n * j, 20);
      pop();
    }
  }
}

function sixSq(s) {
  n = 5;
  for (i = 1; i < n; i++) {
    for (j = 1; j < n; j++) {
      push();
      translate(s / 2 * -1, s / 2 * -1);
      rect(s / n * i, s / n * j, 24);
      pop();
    }
  }
}