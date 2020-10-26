const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var boxBase,boxSide1s,boxSide2s;
var ground;
var loadgarbage;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;

function setup() {
	createCanvas(900, 650);


	engine = Engine.create();
	world = engine.world;
    
  ground = createSprite(500,20,900,20);
  
  //boxBase = new Box(750,610,200,20);
  //boxSide1s= new Box(boxBase.x + 110,boxBase.y - 50,20,100);
  //boxSide2s= new Box(boxBase.x - 110,boxBase.y - 50,20,100);

  bobObject1 = new Paper(510,240);
  bobObject2 = new Paper(580,240); 
  bobObject3 = new Paper(650,240);
  bobObject4 = new Paper(720,240); 
  bobObject5 = new Paper(790,240);

  rope1=new Box(bobObject1.body, ground.body, -paperDiameter*2, 0)
  rope2=new Box(bobObject1.body, ground.body, -paperDiameter*2, 0)
  rope3=new Box(bobObject1.body, ground.body, -paperDiameter*2, 0)
  rope4=new Box(bobObject1.body, ground.body, -paperDiameter*2, 0)
  rope5=new Box(bobObject1.body, ground.body, -paperDiameter*2, 0)
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(255);
  
   //ground.display();
  bobObject5.display();
  bobObject4.display();
  bobObject3.display();
  bobObject2.display();
  bobObject1.display();
}

function keyPressed(){
 if(keyCode === UP_ARROW){
 // paper.y = 430;
 // paper.x = 640;
 }
}