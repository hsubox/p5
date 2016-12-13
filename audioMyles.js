function setup() {
  createCanvas(640, 480);

  // Create Audio input
  mic = new p5.AudioIn();
  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();
}

function draw() {
  // Get the overall volume (between 0 and 1.0)
  var vol = mic.getLevel();

  background(59, 127, 85);
  noStroke();

  // face
  fill(204, 184, 137);
  ellipse(width/2, height/2, 200, 250);
  // ears
  ellipse(width/2+100, height/2-15, 30, 50);
  ellipse(width/2-100, height/2-15, 30, 50);
  // facial hair
  fill(204, 173, 110);
  arc(width/2, height/2, 200, 250, 0, PI);
  fill(204, 184, 137);
  rect(width/2-60, height/2, 120, 30);
  // hair
  fill(153, 113, 0);
  arc(width/2, height/2-35, 200, 200, PI, PI*2, OPEN);
  fill(204, 184, 137);
  arc(width/2, height/2-25, 170, 170, PI, PI*2, OPEN);

  // mouth
  fill(204, 122, 76);
  ellipse(width/2, height/2+60, 80, 10+120*vol);
  fill(0);
  ellipse(width/2, height/2+60, 80, 80*vol);

  // eyes
  fill(0);
  ellipse(width/2-20, height/2-20, 10, 10);
  ellipse(width/2+20, height/2-20, 10, 10);
}
