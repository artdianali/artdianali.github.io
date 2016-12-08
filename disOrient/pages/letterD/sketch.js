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
    word='Where are you from?';
    //12 girls band
    window.open('https://youtu.be/gfEWe8nr-r8', "mywindow", "location=1,status=1,scrollbars=1,  width=150,height=150"); 
    //simon & garfunkel
    window.open('https://youtu.be/pey29CLID3I', "mywindow", "location=2,status=2,scrollbars=2,  width=150,height=150");
  } else if (word === "Where are you from?") {
      window.open('https://youtu.be/gfEWe8nr-r8', "mywindow", "location=1,status=1,scrollbars=1,  width=150,height=150"); 
      window.open('https://youtu.be/pey29CLID3I', "mywindow", "location=1,status=1,scrollbars=1,  width=150,height=150");    
  }
}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
}
