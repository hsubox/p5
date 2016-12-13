function setup() {
  createCanvas(640, 480);

  // Create Video Input
  capture = createCapture(VIDEO);
  capture.size(width, height);
  capture.hide();
}

function draw() {
  image(capture, 0, 0, width/2, height/2);
  loadPixels();

  fill(255);
  rect(0, 0, width, height);

  noStroke();
  var stepSize = 10;
  for (var y = 0; y <= height; y += stepSize) {
    for (var x = 0; x <= width; x += stepSize) {
      var i = y * width + x;
      var darkness = (765 - pixels[i*4] - pixels[i*4+1] - pixels[i*4+2]) / 765;
      var radius = (stepSize - 2) * darkness * 1.2;
      fill(pixels[i*4], pixels[i*4+1], pixels[i*4+2])
      ellipse(x, y, radius, radius);
    }
  }
}
