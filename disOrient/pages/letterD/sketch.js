// Get a random element from an array using the random(Array) syntax
var words = [ "dementia", "diaspora", "disorient", "daughter", "death", "deaf", "deliverance", "dialysis", "disassociate", "dominate", "disappoint", "dislocate" ];
var word

function preload() {
  mySound=loadSound('assets/disappoint.mp3');
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
    if (word === 'dementia'){
        textStyle(ITALIC, BOLD);
        fill(0,0,255);
        } else {
          textStyle(NORMAL);
          fill(0,0,0);
    }
  } else if (mouseIsPressed) {
      textSize(random(48,100));
      word=random(words);
      if (word === 'dementia'){
          textStyle(ITALIC, BOLD);
          fill(0,0,255);
          } else {
            textStyle(NORMAL);
            fill(0,0,0);
    }
  }
}

function mousePressed() {
  if (word === "dementia") {
    mySound.play();
    //word='Where are you from?';
    //whereRUFrom.html link
    window.location.replace('../whereRUFrom/index.html'); 
  } 
}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
}
