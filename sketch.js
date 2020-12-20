
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render= Matter.Render;


var ground1;
var side1,side2,side3;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1100, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	side2=new Side(960,470,10,80);
	side1=new Side(1000,486,84,10);
	side3=new Side(1040,470,10,80);
	ground1=new Ground(650,height,1500,20);
	ball=new Paper(40,40,24);

	var render=Render.create({
		element:document.body,engine:engine,
		options:{
			width:1200,
			height:700,
			wireframes:false
		}
	});


	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  //Engine.update(engine);

  side1.display();
  side2.display();
  side3.display();
  ground1.display();
  ball.display();
  //keypressed();
  //console.log(ball.x)
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:116,y:-116})
	}
}