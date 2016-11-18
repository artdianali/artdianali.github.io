// Get a random element from an array using the random(Array) syntax
var words = [ "dementia", "diaspora", "disOrient", "daughter", "death", "diana", "deliverance", "dialysis", "disAssociate", "dominate", "disappoint", "disLocate" ];
var word
var value = d;

function setup() {
  createCanvas(windowWidth,windowHeight);
  textFont("Courier");
  word=random(words);
  textSize(random(54,200));
}


function draw(){
  background(253,203,50);
  text(word,300,500);
  keyPressed();
}

function keyPressed() {
  if (key === 'd') {
    textSize(random(48,200));
    word=random(words);
  } 
}
