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

  background(122);
  noStroke();

  // face
  fill(127, 87, 9);
  ellipse(width/2, height/2, 200, 250);

  // mouth
  fill(204, 57, 0);
  ellipse(width/2, height/2+60, 80, 10+120*vol);
  fill(0);
  ellipse(width/2, height/2+60, 80, 80*vol);

  // eyes
  fill(0);
  ellipse(width/2-20, height/2-20, 10, 10);
  ellipse(width/2+20, height/2-20, 10, 10);

  // hair
  fill(3, 117, 153);
  rect(width/2-90-3, height/2-80, 6, 200);
  rect(width/2+90-3, height/2-80, 6, 200);
  fill(0);
  ellipse(width/2-20, height/2-120, 50, 50);
  ellipse(width/2, height/2-125, 50, 50);
  ellipse(width/2+20, height/2-120, 50, 50);
  ellipse(width/2-50, height/2-105, 50, 50);
  ellipse(width/2+50, height/2-105, 50, 50);
  ellipse(width/2-30, height/2-105, 50, 50);
  ellipse(width/2+30, height/2-105, 50, 50);
  ellipse(width/2, height/2-105, 50, 50);
  ellipse(width/2-65, height/2-90, 50, 50);
  ellipse(width/2+65, height/2-90, 50, 50);
  ellipse(width/2-85, height/2-80, 50, 50);
  ellipse(width/2+85, height/2-80, 50, 50);
  rect(width/2-80-7, height/2-85, 14, 200);
  rect(width/2+80-7, height/2-85, 14, 200);
  rect(width/2-100-7, height/2-90, 14, 200);
  rect(width/2+100-7, height/2-90, 14, 200);
}
