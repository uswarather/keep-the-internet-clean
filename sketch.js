
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box,box2,box3,ball,ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;
    box2 = new Box (583,700,20,100)
    box3 = new Box (756,700,20,100)
    box = new Box (670,750,150,20)
    ground = new Ground (400,780,800,20)
    ball = new Ball (100,600,30)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  box.display()
  box2.display()
  box3.display()
  ball.display()
  ground.display()
}

function keyPressed(){
 if(keyCode==(UP_ARROW)){
   Matter.Body.applyForce(ball.ball,ball.ball.position,{x:8,y:-10})

 }




}

