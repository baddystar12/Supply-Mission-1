var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10, package_options);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10, ground_options);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;
	var ground_options={
		isStatic:true
	}
  var package_options={
	  restitution: 1,
	  isStatic:true
  }

	packageBody = Bodies.circle(width/2 , 200 , 5, package_options );
	World.add(world, packageBody);
	


	ground = Bodies.rectangle(width/2, 650, width, 10, ground_options);
 	World.add(world, ground);


	Engine.run(engine);
	

}


function draw() {
	background("turquoise");
	Engine.update(engine);
	rectMode(CENTER);
    rect(ground.position.x, ground.position.y, 400, 20);
    ellipse(package.position.x, package.position.y, 20, 20);
	if(keyDown("space")){
	Matter.Body.setStatic(packageBody, false);
}
    drawSprites();
 
}
