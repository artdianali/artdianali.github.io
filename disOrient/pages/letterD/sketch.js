// Get a random element from an array using the random(Array) syntax
var words = [ "dementia", "diaspora", "disOrient", "daughter", "death", "diana", "deliverance", "dialysis", "disAssociate", "dominate", "disappoint", "disLocate" ];
var word
var box
var myLink;

function preload() {
  mySound=loadSound('assets/spaceship2.mp3');
  box=rect(width/7,height/2, 55, 55);
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  textFont("Courier");
  word=random(words);
  textSize(random(54,90));
}


function draw(){
  background(253,203,50);
  text(word,width/7,height/2);
  keyPressed();
}

function keyPressed() {
  if (key === 'd') {
    textSize(random(48,90));
    word=random(words);
  } 
}

function mousePressed() {
  if (word === "diana") {
    mySound.play();
    word = '';
    myLink = createA('http://p5js.org/', box);
  } 
}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
}
