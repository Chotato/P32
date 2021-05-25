
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var gS = "set";
var backgroundImg;

function preload() {
    backgroundImg = loadImage("day.png");
    getTime();
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400, 690, 800, 20);

    b1 = new Ground(800, 350, 2, 700);
    b2 = new Ground(0, 350, 2, 700);
    b3 = new Ground(400, 0, 800, 2);
    b4 = new Ground(400, 700, 800, 2); 

	plat1 = new Ground(400, 600, 250, 10);
	plat2 = new Ground(630, 500, 175, 10);

	box1 = new Box(325, 550, 25, 40);
	box2 = new Box(350, 550, 25, 40);
	box3 = new Box(375, 550, 25, 40);
	box4 = new Box(400, 550, 25, 40);
	box5 = new Box(425, 550, 25, 40);
	box6 = new Box(450, 550, 25, 40);	
	box7 = new Box(475, 550, 25, 40);

	box8 = new Box(360, 510, 25, 40);
	box9 = new Box(385, 510, 25, 40);
	box10 = new Box(410, 510, 25, 40);
	box11 = new Box(435, 510, 25, 40);

	box12 = new Box(395, 460, 25, 40);

	box13 = new Box(595, 475, 25, 40);
	box14 = new Box(620, 475, 25, 40);
	box15 = new Box(645, 475, 25, 40);
	box16 = new Box(670, 475, 25, 40);

	box17 = new Box(607.5, 435, 25, 40);
	box18 = new Box(632.5, 435, 25, 40);
	box19 = new Box(657.5, 435, 25, 40);

	box20 = new Box(632.5, 395, 25, 40);

	polygon = new Poly(100, 550);
    
	sling = new Sling(polygon.body, {x:100, y:550})




	Engine.run(engine);
  
}


function draw() {
  background(backgroundImg);
  rectMode(CENTER);
 
  Engine.update(engine);
  
  ground.display();

  plat1.display();
  plat2.display();

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
  box19.display();

  box20.display();


  polygon.display();

  sling.display();

}

function mouseDragged(){
    if (gS!=="launched"){
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    }
}

function mouseReleased(){
    sling.fly();
    gS = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        
        gS = "set";
        Matter.Body.setPosition(polygon.body, {x:100, y:550})
       sling.attach(polygon.body);
       
    }
    
}
async function getTime(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var jsonData = await response.json();
    var hour = jsonData.datetime.slice(11, 13); 
    console.log(hour);
    if(hour >= 06 && hour <= 18){
        backgroundImg = loadImage("day.png");
    }
    else{
        backgroundImg = loadImage("night.png");
    }
    
}