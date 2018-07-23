//https://kylemcdonald.github.io/cv-examples/BackgroundSubtraction/sketch.js
var capture;
var img;
var ratio;
var song;

function preload() {
  song = loadSound('../../assets/MariachiMexicoJesusitaEnChihuahua.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  song.loop();
  capture = createCapture(VIDEO);
  capture.size(640, 480);
  capture.hide();
  img = loadImage("../../assets/JoseRobertoPanfiloMedinaOrtiz.jpg");
}

var backgroundPixels;

function resetBackground() {
  backgroundPixels = undefined;
}

function mousePressed() {
    resetBackground();
    fullscreen(true);
}

function draw() {
  //background(255, 204, 0);
  // Displays the image at its actual size at point (0,0)
  //var distortion = map(ratio,0,1,0,255);
  //tint(distorion,0,0);
  backgroundSubtraction();
  pixelate();
}

function backgroundSubtraction() {
  // video
  capture.loadPixels();
  if (capture.pixels.length > 0) { // don't forget this!
    if (!backgroundPixels) {
      backgroundPixels = copyImage(capture.pixels, backgroundPixels);
    }
    var w = capture.width,
      h = capture.height;
    var i = 0;
    var pixels = capture.pixels;
    var thresholdAmount = 20 /*select(20 value()*/ * 255. / 100.;

    var total = 0;
    for (var y = 0; y < h; y++) {
      for (var x = 0; x < w; x++) {
        // another common type of background thresholding uses absolute difference, like this:
        // var total = Math.abs(pixels[i+0] - backgroundPixels[i+0] > thresholdAmount) || ...
        var rdiff = Math.abs(pixels[i + 0] - backgroundPixels[i + 0]) > thresholdAmount;
        var gdiff = Math.abs(pixels[i + 1] - backgroundPixels[i + 1]) > thresholdAmount;
        var bdiff = Math.abs(pixels[i + 1] - backgroundPixels[i + 1]) > thresholdAmount;
        var anydiff = rdiff || gdiff || bdiff;
        var output = 0;
        if (anydiff) {
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

  //image(capture, 0, 0, windowWidth, windowHeight);
}

function pixelate() {
  img.loadPixels();
  // step size depends on camera change (using the variable "ratio", mapping it to 0...100)
  var stepSize = int(map(ratio, 0, 1, 1, 100));
    rectMode(CENTER);
  
  // move image next to camera image (moving width pixels to the rght)
  //translate(capture.width,0)
  
  // only pixelate if stepsize is at least 4 pixels (might get too slow otherwise)
  if (stepSize < 4) {
    image(img, 0, 0);
  }  else {
    for (var y = 0; y < img.height; y += stepSize) {
      for (var x = 0; x < img.width; x += stepSize) {
        var i = y * img.width + x;
        noStroke();
        fill(img.pixels[i * 4], img.pixels[i * 4+1], img.pixels[i * 4+2]);
        var radius = stepSize;
        rect(x, y, radius, radius);
      }
    }
  }
}

// copy an array, creating a new array if necessary
// usage: dst = copyImage(src, dst)
// based on http://jsperf.com/new-array-vs-splice-vs-slice/113
function copyImage(src, dst) {
  var n = src.length;
  if (!dst || dst.length != n) {
    dst = new src.constructor(n);
  }
  while (n--) {
    dst[n] = src[n];
  }
  return dst;
}
