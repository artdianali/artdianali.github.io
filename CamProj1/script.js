//https://kylemcdonald.github.io/cv-examples/BackgroundSubtraction/sketch.js
var capture;
var img;
var ratio;

function setup() {
  createCanvas(1000, 500);
  capture = createCapture(VIDEO);
  capture.size(640, 480);
  capture.hide();
  img = loadImage("assets/flwr.jpg"); 
}

var backgroundPixels;
function resetBackground() {
  backgroundPixels = undefined;
}

function draw() {
  background(255, 204, 0);
  // Displays the image at its actual size at point (0,0)
  //var distortion = map(ratio,0,1,0,255);
  //tint(distorion,0,0);
  image(img, 647, 0);
  backgroundSubtraction();
  pixelate();
}

function backgroundSubtraction() {
  // video
  capture.loadPixels();
  if(capture.pixels.length > 0) { // don't forget this!
    if(!backgroundPixels) {
      backgroundPixels = copyImage(capture.pixels, backgroundPixels);
    }
    var w = capture.width, h = capture.height;
    var i = 0;
    var pixels = capture.pixels;
    var thresholdAmount = select('#thresholdAmount').value() * 255. / 100.;

          var total = 0;
      for(var y = 0; y < h; y++) {
        for(var x = 0; x < w; x++) {
          // another common type of background thresholding uses absolute difference, like this:
          // var total = Math.abs(pixels[i+0] - backgroundPixels[i+0] > thresholdAmount) || ...
          var rdiff = Math.abs(pixels[i+0] - backgroundPixels[i+0]) > thresholdAmount;
          var gdiff = Math.abs(pixels[i+1] - backgroundPixels[i+1]) > thresholdAmount;
          var bdiff = Math.abs(pixels[i+1] - backgroundPixels[i+1]) > thresholdAmount;
          var anydiff = rdiff || gdiff || bdiff;
          var output = 0;
          if(anydiff) {
            output = 255;
            total++;
          }
          pixels[i++] = output;
          pixels[i++] = output;
          pixels[i++] = output;
          i++; // skip alpha
        }
      }
      var n = w * h;
      ratio = total / n;
      select('#presence').elt.innerText = int(100 * ratio); 
  }
  
  capture.updatePixels();
  
  image(capture, 0, 0, 640, 480);
}

function pixelate() {
  img.loadPixels();
  var stepSize = map(ratio,0,1,0,50);
  for (var y=0; y<img.height; y+=stepSize) {
    for (var x=0; x<img.width; x+=stepSize) {
      var i = y * img.width + x;
      var darkness = (255 - img.pixels[i*4]) / 255;
      var radius = stepSize * darkness;
      ellipse(x, y, radius, radius);
    }
  //}
}

