const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];
var world, engine;
var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(240,795,480,10);
}

function draw() {
  background("black");
  Engine.update(engine);
  ground.display();
  if(frameCount %90 === 0){
    particles.push(new Particle(random(200,400),0,10));
  }
  for (var k = 0; k <=width; k = k + 80){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, 300));
  }
  for(var j = 40; j <=width; j=j+50){
    plinkos.push(new Plinko(j,75,10));
  }
  for(var j = 15; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,175,10));
  }
  for(var j = 40; j <=width-20; j=j+50){
    plinkos.push(new Plinko(j,275,10));
  }
  for(var j = 15; j <=width-30; j=j+50){
    plinkos.push(new Plinko(j,375,10));
  }
  for (var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }
  for(var p = 0; p < plinkos.length;p++){
    plinkos[p].display();
  }
  for(var p = 0; p < particles.length;p++){
    particles[p].display();
  }
}