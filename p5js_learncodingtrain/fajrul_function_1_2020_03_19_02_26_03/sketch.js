let ball = {
  x: 300,
  y: 200,
  xspeed: -4,
  yspeed: -4
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  display();
  move();
  bounce();
}

function move(){
  ball.x += ball.xspeed;
  ball.y += ball.yspeed;
}

function bounce(){
  if(ball.x > width || ball.x < 0){
    ball.xspeed = ball.xspeed * -1;
  }
  if(ball.y > height || ball.y < 0){
    ball.yspeed = ball.yspeed * -1;
  }
}

function display(){
  stroke(255);
  strokeWeight(4);
  noFill();
  ellipse(ball.x, ball.y, 24, 24);
}