const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var log1,log2,log3,log4;
var pig1,pig2;
var bird;

function setup(){
    var canvas = createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,565,50,50);
    box2 = new Box(850,565,50,50);
    pig1 = new Pig(775,565,40,40)
    log1 = new Log(775,550,20,200,PI/2);
    box3 = new Box(700,545,50,50);
    box4 = new Box(850,545,50,50);
    pig2 = new Pig(775,545,40,40);
    log2 = new Log(775,500,20,200,PI/2);
    box5 = new Box(775,480,50,50);
    log3 = new Log(740,400,20,100,PI/4);
    log4 = new Log(820,400,20,100,-PI/3);
    bird = new Bird(50,50,50,50);
    ground = new Ground(width/2,height-10,width,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
    ground.display();
}