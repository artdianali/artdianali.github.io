// Get a random element from an array using the random(Array) syntax
var words = [ "dementia", "diaspora", "disOrient", "daughter", "death", "diana", "deliverance", "dialysis", "disAssociate", "dominate", "disappoint", "disLocate" ];
var word
var myLink;

function preload() {
  mySound=loadSound('assets/spaceship2.mp3');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  textFont("Courier");
  word=random(words);
  textSize(random(54,100));
}


function draw(){
  background(253,203,50);
  text(word,width/7,height/2);
  keyPressed();
}

function keyPressed() {
  if (key === 'd') {
    textSize(random(48,100));
    word=random(words);
  } 
}

function mousePressed() {
  if (word === "diana") {
    mySound.play();
    word='';
    myLink=createA(window.open('https://youtu.be/gfEWe8nr-r8'),window.open('https://youtu.be/pey29CLID3I'), 'Where are you from?');
    myLink.position(width/7,height/2.45);
    myLink.style("font-size", "80px");
    myLink.style("color", "#660033");
    myLink.style("text-decoration", "none");
    myLink.style("font-family", "Courier");
    myLink.attribute("target", "_blank");
  } 
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
}
