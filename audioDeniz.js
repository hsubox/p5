function setup() {
  createCanvas(640, 480);

  // Create Audio input
  mic = new p5.AudioIn();
  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();

  noStroke();
  for (var x = 0; x <= width; x+=width/2) {
    drawGradient(x, height/2);
  }

}

function drawGradient(x, y) {
  var radius = width + 300;
  var h = random(0, 360);
  for (var r = radius; r > 0; r -= 10) {
    fill(255-51*(r/radius), 255-145*(r/radius), 255-126*(r/radius))
    ellipse(width/2+50, height/2+50, r, r);
    h = (h + 1) % 360;
  }
}

function draw() {
  // Get the overall volume (between 0 and 1.0)
  var vol = mic.getLevel();

  // face
  fill(204, 165, 126);
  ellipse(width/2, height/2, 200, 250);
  // hair
  fill(127, 73, 44);
  arc(width/2, height/2-35, 200, 200, PI, PI*2, OPEN);
  ellipse(width/2-90, height/2-90, 60, 60);
  triangle(width/2-60,height/2-70,width/2-115,height/2-105,width/2-185,height/2-22);
  triangle(width/2-60,height/2-70,width/2-115,height/2-105,width/2-180,height/2-20);
  triangle(width/2-60,height/2-70,width/2-115,height/2-105,width/2-175,height/2-10);
  fill(204, 165, 126);
  arc(width/2, height/2-15, 170, 170, PI, PI*2, OPEN);
  // ears
  fill(204, 165, 126);
  ellipse(width/2+100, height/2-15, 30, 50);
  ellipse(width/2-100, height/2-15, 30, 50);

  // mouth
  fill(204, 57, 42);
  ellipse(width/2, height/2+60, 80, 10+120*vol);
  fill(0);
  ellipse(width/2, height/2+60, 80, 80*vol);

  // eyes
  fill(0);
  ellipse(width/2-20, height/2-20, 15);
  ellipse(width/2+20, height/2-20, 15);

  // earrings
  fill(118, 204, 73);
  ellipse(width/2+107, height/2+8, 10, 25);
  ellipse(width/2-103, height/2+8, 10, 25);
  fill(76, 153, 36);
  ellipse(width/2+103, height/2+9, 10, 25);
  ellipse(width/2-107, height/2+9, 10, 25);
  fill(73, 127, 44);
  ellipse(width/2+105, height/2+10, 10, 25);
  ellipse(width/2-105, height/2+10, 10, 25);

  // flower
  fill(204, 101, 91);
  ellipse(width/2+118, height/2+120, 20);
  fill(127, 52, 44);
  ellipse(width/2+117, height/2+130, 20);
  fill(127, 52, 44);
  ellipse(width/2+131, height/2+116, 20);
  fill(153, 46, 36);
  ellipse(width/2+124, height/2+141, 20);
  fill(204, 83, 71);
  ellipse(width/2+135, height/2+130, 20);
  fill(204, 185, 71);
  ellipse(width/2+125, height/2+125, 10);

  // border
  fill(204, 185, 71);
  rect(0, height-10, width, 10);
  rect(0, height/2, 10, height/2);
  rect(width-10, height/2, 10, height/2);
  fill(204, 133, 141);
  rect(0, 0, width, 10);
  rect(0, 0, 10, height/2);
  rect(width-10, 0, 10, height/2);
}
