// Get a random element from an array using the random(Array) syntax
var words = [ "dementia", "diaspora", "disOrient", "daughter", "death", "diana" ];
var word
var value = d;

function setup() {
  createCanvas(500,500);
  word = random(words);  // select random word
  text(word,10,100); //draw the word
}

function draw() {
}

function keyTyped() {
  if (key === 'd') {
    text(word,10,100);
  } else if (key === 'b') {
    background(255);
  }
}


