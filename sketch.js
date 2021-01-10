const Constraint=Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	dabba=new roof(400,height/4,200,20)
	
	L=new ball(400,400,40)
	ro=new rope(L.body,dabba.body,20,0)
	L2=new ball(300,400,40)
	ro2=new rope(L2.body,dabba.body,-20,0)
	Light=new ball(200,400,40)
	ro3=new rope(Light.body,dabba.body,-40,0)
	N=new ball(500,400,40)
	ro4=new rope(N.body,dabba.body,40,0)
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine)
  dabba.display()
  L.display()
  ro.display()
  L2.display()
  ro2.display()
  Light.display()
  ro3.display()
  N.display()
  ro4.display()
 
}


