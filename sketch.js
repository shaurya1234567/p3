const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine,world
var backgroundImg;

function preload(){
backgroundImg=loadImage('snow3.jpg')

}

function setup() {
  engine=Engine.create()
  world=engine.world;
  createCanvas(1200,600);
 // createSprite(400, 200, 50, 50);
}

function draw() {
  background(backgroundImg);  
  Engine.update(engine)
  drawSprites();
}