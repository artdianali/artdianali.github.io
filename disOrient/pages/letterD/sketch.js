// Get a random element from an array using the random(Array) syntax
var words = [ "dementia", "diaspora", "disOrient", "daughter", "death", "diana", "deliverance", "dialysis", "disAssociate", "dominate", "disappoint", "disLocate" ];
var word

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
    if (word === 'diana'){
        textStyle(ITALIC);
        fill(0,139,139);
        } else {
          textStyle(NORMAL);
          fill(0,0,0);
    }
  } 
}

function mousePressed() {
  if (word === "diana") {
    mySound.play();
    word='Where are you from?';
    //whereRUFrom.html link
    window.open('../whereRUFrom?/index.html'); 
  } else if (word === "Where are you from?") {
      window.open('https://youtu.be/gfEWe8nr-r8'); 
      window.open('https://youtu.be/yvHoKXQskak');
      window.open('https://youtu.be/pey29CLID3I');
  }
}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
}
