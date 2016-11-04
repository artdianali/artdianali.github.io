var img;
var imgMask;

function preload() {
  img = loadImage("assets/grandma.jpg");
  imgMask = loadImage("assets/dBlueGhost.png");
}

function setup() {
  createCanvas(540, 720);
  imageMode(CENTER);
  noCursor();
}

function draw() {
  background(255)
  image(img, width/2, height/2);
  image(imgMask, mouseX, mouseY);
}