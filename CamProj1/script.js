var capture;
var image;

function setup() {
  createCanvas(1000, 500);
  capture = createCapture(VIDEO);
  capture.size(640, 500);
  capture.hide();
  img = loadImage("assets/flwr.jpg"); 
}

var backgroundPixels;
function resetBackground() {
  backgroundPixels = undefined;
}

function draw() {
  // Displays the image at its actual size at point (0,0)
  image(img, 0, 0);
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
    var thresholdType = getRadioValue('thresholdType');
    if(thresholdType === 'rgb') {
      for(var y = 0; y < h; y++) {
        for(var x = 0; x < w; x++) {
          pixels[i] = pixels[i] - backgroundPixels[i] > thresholdAmount ? 255 : 0; i++;
          pixels[i] = pixels[i] - backgroundPixels[i] > thresholdAmount ? 255 : 0; i++;
          pixels[i] = pixels[i] - backgroundPixels[i] > thresholdAmount ? 255 : 0; i++;
          i++; // skip alpha
        }
      }
    } else if (thresholdType === 'bw') {
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
      var ratio = total / n;
      select('#presence').elt.innerText = int(100 * ratio); 
    } else {
      for(var y = 0; y < h; y++) {
        for(var x = 0; x < w; x++) {
          pixels[i] = pixels[i] - backgroundPixels[i]; i++;
          pixels[i] = pixels[i] - backgroundPixels[i]; i++;
          pixels[i] = pixels[i] - backgroundPixels[i]; i++;
          i++; // skip alpha
        }
      }
    }
  }
  capture.updatePixels();
  
  image(capture, 0, 0, 640, 480);
}
