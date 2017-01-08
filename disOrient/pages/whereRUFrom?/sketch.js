function setup() {
  createCanvas(windowWidth,windowHeight);
  textFont("Courier");
  textSize(random(54,100));
}

function draw(){
  background(0,139,139);
  text("Where are you from?",width/7,height/2);
  fill(253,203,50);
  if (mouseIsPressed) {
    window.open('../shutUp.html')
  }
}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
}
