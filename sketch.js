const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var bgImage;
var polygon,slingshot;
var ground1,ground2;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18;
var b19,b20,b21,b22,b23,b24;
function preload(){
    bgImage = loadImage("sprites/bg.png");
}

function setup(){
    createCanvas(1000,500);
    engine = Engine.create()
    world = engine.world;
    polygon = new Polygon(150,370,60,50);
    slingshot = new SlingShot(polygon.body,{x:150,y:370});
    ground1 = new Ground(480+30,250,250,10);
    ground2 = new Ground(780,420,280,10);
    b1 = new Block(370+33,225);
    b2 = new Block(400+33,225);
    b3 = new Block(430+33,225);
    b4 = new Block(460+33,225);
    b5 = new Block(490+33,225);
    b6 = new Block(520+33,225);
    b7 = new Block(550+33,225);
    b8 = new Block(580+33,225);
    b9 = new Block(433,200);
    b10 = new Block(463,200);
    b11 = new Block(493,200);
    b12 = new Block(523,200);
    b13 = new Block(553,200);
    b14 = new Block(583,200);
    b15 = new Block(463,175);
    b16 = new Block(493,175);
    b17 = new Block(523,175);
    b18 = new Block(553,175);
    b19 = new Block(773,395);
    b20 = new Block(803,395);
    b21 = new Block(788,370);
    b22 = new Block(788,345);
    b23 = new Block(788,320);
    b24 = new Block(788,295);

    
}

function draw(){
    background(bgImage);
    Engine.update(engine);
    slingshot.display();
    polygon.display();
   
    ground1.display();
    ground2.display();
    stroke(225);
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    
    stroke("yellow");
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    b13.display();
    b14.display();
    stroke("skyblue");
    b15.display();
    b16.display();
    b17.display();
    b18.display();
    stroke("blue");
    
    
    
    b21.display();
    stroke("purple");
    b22.display();
    stroke("pink");
    b23.display();

    
}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
    //slingshot.sling.length = 0;
    //slingshot.sling.stiffness = 0.001;
}
function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(polygon.body,{x:150,y:370});
        slingshot.attach(polygon.body);
    }
}