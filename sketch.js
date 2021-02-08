const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint
var engine, world;
var backgroundImg, ground, hero1, launcher1, monster
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15
function preload() {
    backgroundImg = loadImage("images/GamingBackground.png");
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(450,500,900,20);
   

block1=new Box(400,150,60,70)
block2=new Box(400,220,60,70)
block3=new Box(400,290,60,70)
block4=new Box(400,360,60,70)
block5=new Box(400,430,60,70)

block6=new Box(500,200,60,70)
block7=new Box(500,280,60,70)

block8=new Box(600,210,60,70)
block9=new Box(600,280,60,70)
block10=new Box(600,350,60,70)

block11=new Box(500,120,60,70)
block12=new Box(500,350,60,70)

block13=new Box(600,140,60,70)
block14=new Box(600,60,60,70)

block15=new Box(600,15,60,70)

hero1=new Hero(100,300,100)
launcher1=new launcher(hero1.body,{x:100,y:300})
monster = new Monster(800,200,200);



}
function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    ground.display();
    hero1.display()

    block1.display()
    block2.display()
    block3.display()
    block4.display()
    block5.display()
    block6.display()
    block7.display()
    block8.display()
    block9.display()
    block10.display()
    block11.display()
    block12.display()
    block13.display()
    block14.display()
    block15.display()

    launcher1.display()
    monster.display();
    
        detectollision(hero1,block1);
        detectollision(hero1,block2);
        detectollision(hero1,block3);
        detectollision(hero1,block4);
        detectollision(hero1,block5);
        detectollision(hero1,block6);
        detectollision(hero1,block7);
        detectollision(hero1,block8);
        detectollision(hero1,block9);
        detectollision(hero1,block10);
        detectollision(hero1,block11);
        detectollision(hero1,block12);
        detectollision(hero1,block13);
        detectollision(hero1,block14);
        detectollision(hero1,block15);
}

function mouseDragged()
{
	Matter.Body.setPosition(hero1.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcher1.fly();
   
}


function detectollision(lhero,lblock){

  blockBodyPosition=lblock.body.position
  heroBodyPosition=lhero.body.position
  
  var distance=dist(heroBodyPosition.x, heroBodyPosition.y, blockBodyPosition.x, blockBodyPosition.y)
  
  	if(distance<=lblock.r+lhero.r)
    {
     
  	  Matter.Body.setStatic(lhero.body,false);
    }

  }