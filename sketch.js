
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Body
var paper1
var ground1
var rope1
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	paper1= new paper(200,200,50,50)
	ground1= new ground(width/2,200,width,20)
	rope1= new rope(paper1,this.paperbody,ground1.body)
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  paper1.display()
  ground1.display()
  rope1.display()
 
}



