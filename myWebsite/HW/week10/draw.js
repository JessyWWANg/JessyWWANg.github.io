

function setup() {
  createCanvas(500,500);
  x = width/2-45;
  y = height;
}
function draw() {
  background(86,145,228);
  //draw a banana
  noStroke();
  fill(250,194,53);
  banana(x, y);

  // Jiggling randomly on the horizontal axis
  x = x + random(-5, 5);
  // Moving up at a constant speed
  y = y - 1;
  //banana back to bottom
  if (y < 0) {
    y = height;
  }
}
function banana(x,y){
  beginShape();
  vertex(x,y);
  vertex(x+59,y+8);
  vertex(x+87,y+0);
  vertex(x+87,y+25);
  vertex(x+58,y+25);
  vertex(x+60,y+47);
  vertex(x+76,y+70);
  vertex(x+134,y+85);
  vertex(x+129,y+115);
  vertex(x+59,y+127);
  vertex(x+19,y+101);
  vertex(x+11,y+66);
  vertex(x+36,y+40);
  vertex(x+36,y+25);
  vertex(x+0,y+25);
  vertex(x,y);
  endShape();
}
