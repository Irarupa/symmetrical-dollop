const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var ball, slingShot;


function preload(){
    backgroundImg = loadImage("sprites/backGround1.jpg")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    

    box1 = new Box(700,320,70,70);
    box2 = new Box(770,320,70,70);
    box3 = new Box(840,320,70,70);
    box4 = new Box(910,320,70,70);
    box5 = new Box(980,320,70,70);
    

    platform1 = new Log(840,240,400,PI/2);
    box6 = new Box(735,200,70,70);
    box7 = new Box(805,200,70,70);
    box8 = new Box(875,200,70,70);
    box9 = new Box(945,200,70,70);
    platform2 = new Log(840,120,300,PI/2);

    box10 = new Box(770,100,70,70);
    box11 = new Box(840,100,70,70);
    box12 = new Box(910,100,70,70);


    
    ball = new Ball(100,100);

    chain = new Chain(ball.body,{x:200,y:100});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
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

    

       

    ball.display();
    chain.display(); 
    platform1.display(); 
    platform2.display();

}


function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY}) ; 

}


function mouseReleased(){
    chain.break()
}