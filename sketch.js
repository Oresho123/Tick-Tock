function setup() {
  createCanvas(800,400);
  hr=hour();
  mn=minute();
  sc=second();
  angleMode(DEGREES);
  push();
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
}

function draw() {
  background(rgb(World.mouseX, World.mouseY, 0));
  let c = map(mouseX, 0, width, 0, 175);
  let d = map(mouseX, 0, width, 40, 300);
  fill(255, c, 0);
  ellipse(width/2, height/2, d, d);
  scAngle=map(sc,0,60,0,360);
  let h = hour();
text('Current hour:\n' + h, 5, 50);  
let m = minute();
text('Current minute: \n' + m, 5, 100);
let s = second();
text('Current second: \n' + s, 5, 150);
  drawSprites();
}