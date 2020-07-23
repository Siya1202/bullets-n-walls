var car,wall,thickness;
var speed,weight;

function setup() {
createCanvas(1600,400);
car = createSprite(50, 200, 50, 50);
car.debug=true;
wall = createSprite(1500,200,60,height/2);
wall.shapeColor="white";
wall.debug=true;
speed = random(55,90);
weight = random(400,1500);
thickness=random(22,83)
}

function draw() {
  background(0,0,0);  
  car.velocityX = 0;
    
  if(wall.x-car.x < (car.width+wall.width )/2){
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed*speed /22509
     if (deformation > 180){
     car.shapeColor=color(255,0,0)
     }
     if (deformation < 180 && deformation > 100){
      car.shapeColor=color(230,230,0)
      }
     if (deformation < 100){
        car.shapeColor=color(0,255,0)
        }
  }

  if(hascollided(car,wall)){
    car.velocityX=0;
    var damage = 0.5 * speed * speed / (thickness * thickness * thickness);
  }

  if(damage>10){
    wall.shapeColor="black"
  }

  drawSprites();

}

function hascollided(car,wall){
  carRightEddge=car.x+car.width;
  wallLeftEdge=wall.x;
  if(carRightEddge>=wallLeftEdge){
    return true;
  }
    return false;
}