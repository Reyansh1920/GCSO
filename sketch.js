var car,wall;
var speed,weight;


function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = color(80,80,80);
  car.velocityX = speed;
}

function draw() {
  background(255,255,255); 
  if (wall.x - car.x < car.width/2 + wall.width/2 ) {
  deformation = 0.5 * weight * speed * speed / 22500
  car.velocityX = 0;
  if (deformation < 100 ) {
    car.shapeColor = "red";
  }
  if(deformation > 100 && deformation < 180) {
    car.shapeColor = "green";
  }
  if(deformation > 180 )
  car.shapeColor = "green";
  }
  





  drawSprites();
}