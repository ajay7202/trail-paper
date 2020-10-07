
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 400);

	engine = Engine.create();
	world = engine.world;
ground = new Ground(600,height,1200,25);
paperball = new Paperball(320,320,30,27);
bin = new Bin(780,344,20,80);
bin2 = new Bin2(880,344,20,80);
bin3 = new Bin3(830,380,120,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  bin.display();
  bin2.display();
  bin3.display();
  paperball.display();  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW){
		Matter.Body.applyforve(paperball.Body,paperball.Body.pos,{x:115,y:-115});
		Matter.Body.setStatic(paperball.Body,false);
	
	 
		 restitution:0.1;
	var ground_options ={
        isStatic: false
    }
	}
}


