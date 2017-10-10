function setup() {
  createCanvas(500,500);
  angleMode(DEGREES);
}

function draw() {

  //c-left
  push();
  translate(125,250);
  stroke(lerpColor(color('#2b3990'),color('#bd1f3d'),frameCount/120));
  line(-125,0,-1*cos(frameCount*3)*125,sin(frameCount*3)*125);
  pop();
  
  //c-right
  push();
  translate(375,250);
  stroke(lerpColor(color('#2b3990'),color('#bd1f3d'),frameCount/120));
  line(125,0,cos(frameCount*3)*125,sin(frameCount*3)*125);
  pop();
  
  //c-up
  push();
  translate(250,125);
  rotate(270);
  stroke(lerpColor(color('#2b3990'),color('#bd1f3d'),frameCount/120));
  line(125,0,cos(frameCount*3)*125,sin(frameCount*3)*125);
  pop();
  
  //c-down
  push();
  translate(251,375);
  rotate(90);
  stroke(lerpColor(color('#2b3990'),color('#bd1f3d'),frameCount/120));
  line(125,0,cos(frameCount*3)*125,sin(frameCount*3)*125);
  pop();
  

  if(frameCount==120){
    noLoop();

  }
}