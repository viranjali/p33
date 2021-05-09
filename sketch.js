const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var backgroundImg;
var character1,character1Img;
var snowfall = [];


function preload(){
  backgroundImg = loadImage("snow1.jpg");
  character1Img = loadImage("character1.png");

}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  chracter1 = createSprite(200,200);
  chracter1.addImage(character1Img);


}
function draw() {
  background(backgroundImg);  

  Engine.update(engine);

  if (keyDown(LEFT_ARROW)){
    chracter1.x = chracter1.x-5
  }
  if (keyDown(RIGHT_ARROW)){
    chracter1.x = chracter1.x+5
  }
  if (chracter1.y>200){

  if (keyDown(UP_ARROW)){
    chracter1.y = chracter1.y-5
  }
}
  if (keyDown(DOWN_ARROW)){
    chracter1.y = chracter1.y+5
  }

  if(frameCount%10===0){
    
    snowfall.push(new Snow(random(50,650), 10));
  }

 for (var j = 0; j < snowfall.length; j++) {
  
    snowfall[j].display();
  }

  drawSprites();

}