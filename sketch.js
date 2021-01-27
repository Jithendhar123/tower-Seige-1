const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground1,ground2,ground3;
var block1,block2,block3,block4,block5,block6,block7;
var block8,block9,block10,block11,block12;
var block13,block14,block15;
var block16;
var block17, block18, block19, block20, block21;
var block22,block23,block24
var block25
var pentagon;
var engine, world;
function setup(){
    var canvas = createCanvas(1000, 400);
    engine = Engine.create();
    world = engine.world;
    ground1=new Ground(450,310,270,12);
    ground2=new Ground(800,225,210,12);
    ground3=new Ground(500,390,1000,20);
    block1=new Box(360,275,30,40);
    block2=new Box(390,275,30,40);
    block3=new Box(420,275,30,40);
    block4=new Box(450,275,30,40);
    block5=new Box(480,275,30,40);
    block6=new Box(510,275,30,40);
    block7=new Box(540,275,30,40);
    block8=new Box1(390,235,30,40);
    block9=new Box1(420,235,30,40);
    block10=new Box1(450,235,30,40)
    block11=new Box1(480,235,30,40)
    block12=new Box1(510,235,30,40)
    block13=new Box2(420,175,30,40)
    block14=new Box2(450,175,30,40)
    block15=new Box2(480,175,30,40)
    block16=new Box3(450,125,30,40)
    block17=new Box(740,205,30,40);
    block18=new Box(770,205,30,40);
    block19=new Box(800,205,30,40);
    block20=new Box(830,205,30,40);
    block21=new Box(860,205,30,40);
    block22=new Box2(770,155,30,40);
    block23=new Box2(800,155,30,40);
    block24=new Box2(830,155,30,40);
    block25=new Box3(800,125,30,40);
    pentagon=new polygon(200,200,20);
    sling=new SlingShot(pentagon.body,{x:180,y:190})

    
    
    
    
    

    
}

function draw(){
    background(45,2,2);
    Engine.update(engine);
    strokeWeight(0);
  fill("white");
  textSize(22);
  text("Drag the Polygon and Release it, to launch it towards the blocks",170,30);
  
    ground1.display();
    ground2.display();
    ground3.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    pentagon.display();
    sling.display();
    
    
    
    
}

function mouseDragged()
{
  Matter.Body.setPosition(pentagon.body,{x:mouseX,y:mouseY});
}


function mouseReleased()
{
   sling.fly();
}



