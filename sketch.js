
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var block1_options,block2_options,block3_options;
var plane_option

function preload()
{

}

function setup() {
	createCanvas(800, 700);
   
	var plane_option={
	isStatic: true	
	}
	

	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	var block1_options ={
		restitution:0.5,
		friction:0.02,
		frictionAir:0
		}
		var block2_options ={
		restitution:0.7,
		friction:0.01,
		frictionAir:0.1,
		}
        var block3_options ={
			restitution:0.01,
			friction:1,
			frictionAir:0.3,
		}
       block1 = Bodies.circle(200,10,10,block1_opitions);
	   world.add(world,block1);

	   block2 = Bodies.circle(220,50,10,10,block2_opitions);
	   world.add(world,block2);

	   block3 = Bodies.circle(350,50,10,10,block3_opitions);
 	   world.add(world,block3);

    
	   fill("brown");
	   rectMode(CENTER);
	   ellipseMode(RADIUS);
	
	
	
		Engine.run(engine);
  
}


function draw() {

  Engine.update(engine);
	
  rectMode(CENTER);
  background("lightgreen");
 
  
  ellipse(circle);


  drawSprites();
 
rect(plane.position.x,plane.position.y,1200);
ellipse(block1.position.x,block1.position.y,90);
rect(block2.position.x,block2.position.y,50,50);
rect(block3.position.x,block3.position.y,100,50);	





}
