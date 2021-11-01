const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var bgImage ;
function preload(){
bgImage=loadImage("background.jpg")
}
function setup() {
   createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
ground=new Ground(600,390,1200,10)
  platform=new Ground(900,300,300,10)
  box1=new Box(760,280,50,50);
  box2=new Box(810,280,50,50);
  box3=new Box(860,280,50,50);
  box4=new Box(910,280,50,50);
  box5=new Box(960,280,50,50);
  box6=new Box(1010,280,50,50);
  box7=new Box(760,230,50,50);
  box8=new Box(810,230,50,50);
  box9=new Box(860,230,50,50);
  box10=new Box(910,230,50,50);
  box11=new Box(960,230,50,50);
  box12=new Box(1010,230,50,50);
  box13=new Box(760,180,50,50);
  box14=new Box(810,180,50,50);
  box15=new Box(860,180,50,50);
  box16=new Box(910,180,50,50);
  box17=new Box(960,180,50,50);
  box18=new Box(1010,180,50,50);
  girl=new Girl(100,100,100,100);
}

function draw() {
  background(bgImage); 
  Engine.update(engine);
 ground.display();
  platform.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  girl.display();
}




