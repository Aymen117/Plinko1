const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var divisionHeight=300
var engine, world;
var particles = []
  var plinkos = []
  var divisions = []
function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  plinko = new Plinko(200,200,10);
}

function draw() {
  background(255,255,255); 
  Engine.update(engine);
  plinko.display();
  for(var j = 0; j < particles.length;j++){
    particles[j].display();
  }
  for (var k = 0; k < divisions.length;k++){
    divisions[k].display();
  }
  for(var k = 0;k<=width;k=k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }
}