function preload() {
  sound1=loadSound('assets/PlacidoDomingo.mp3');
  sound2=loadSound('assets/SimonGarfunkel.mp3');
  sound3=loadSound('assets/12GirlsBand.mp3');
  img = loadImage("assets/condor.jpg");
  image(img, 0, 0, width, height);
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  sound1.play();
  sound2.play();
  sound3.play();
  textFont("Courier");
  textSize(random(54,80));
}

function draw(){
  image(img, 0, 0, width, height);
  text("shut the f*ck up", 100, 100);
  fill(253,203,50);
  if (mouseIsPressed) {
    window.open('../visitor/index.html')
  }
}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
}
