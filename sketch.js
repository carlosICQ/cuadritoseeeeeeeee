var ball,ball2,ball3,ball4,ball5,ball6,ball7,ball8;
var wall,wall2,wall3,wall4;
var wallsGroup;

var player;
var score=0;

function preload(){

}

function setup(){
createCanvas(400, 400);

ball=createSprite(200,200,20,20);
ball.shapeColor="blue";
ball.velocityX=2;
ball.velocityY=3;

wall=createSprite(0,200,10,400)
wall2=createSprite(400,200,10,400)
wall3=createSprite(200,0,400,10)
wall=createSprite(200,400,400,10)

wallsGroup=new Group();
wallsGroup.add(wall);
wallsGroup.add(wall2);
wallsGroup.add(wall3);
wallsGroup.add(wall4);

ball.bounceOff(wallsGroup);

if(ball5.bounceOff(player)||ball6.bounceOff(player)
||ball7.bounceOff(player||ball8.bounceOff(player))){
  score=score+1;
}
if(ball1.bounceOff(player)||ball2.bounceOff(player)
||ball3.bounceOff(player||ball4.bounceOff(player))){
  score=score-1;
}

player = createSprite(200,50,15,15);
player.shapeColor = "white";

}


function draw() {
  background("black");
  textSize(15);
  fill("yellow");
  text("Puntos: "+ score, 20, 25);

  createEdgeSprites();

  if(keyCode === UP_ARROW) {
    player.y = player.y -4;
  }
  if(keyCode === DOWN_ARROW) {
    player.y = player.y +4;
  }
  if(keyCode === LEFT_ARROW) {
    player.x = player.x -4;
  }
  if(keyCode === RIGHT_ARROW) {
    player.x = player.x +4;
  }
 
  
  drawSprites();
}
