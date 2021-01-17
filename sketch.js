var car,wall;
var speed,weight;

function setup() {

  createCanvas(1400,400);
  car=createSprite(200, 200, 50, 50);
  

wall=createSprite(1200,200,60,canvas.height/2);
wall.shapeColor= color(80,80,80);
//wall.shapeColor = "white";

speed=random(50,90);
weight=random(400,1500);

car.velocityX = speed;


}

function draw() {
  background(0,0,0);  

  if(wall.x-car.x<(car.width+wall.width)/2){

    car.velocityX=0;
    var deformation= (0.5*weight*speed*speed) /22500;

    if(deformation<100){

      car.shapeColor="green";
    }
    if(deformation > 100 && deformation<180){
      car.shapeColor="yellow";
    }
    if(deformation>180){

      car.shapeColor="red";
    }
  }
  
  
 
 
  drawSprites();
}



