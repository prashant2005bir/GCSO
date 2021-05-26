var car,wall,speed,weight;


function setup() {
  createCanvas(1600,400);
speed=random(45,90);
weight=random(1500,3000);

 wall= createSprite(1550,200,60,height/2);
 
 car =createSprite(100,200,30,20);
 car.shapeColor="white";
 car.velocityX=speed;




}

function draw() {
  background("black");
 if(wall.x-car.x<car.width/2+wall.width/2){
   car.velocityX=0;
  var deformation=0.5*weight*speed*speed/22500;
if(deformation<100){
  car.shapeColor="green";
}
 if(deformation>100 && deformation<180){
  car.shapeColor="yellow";
}
if(deformation>180){
  car.shapeColor="red";
}
 }
console.log(car.x);
  drawSprites();
}