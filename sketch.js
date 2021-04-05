var bullet, wall;

var speed, weight, thickness;

function setup() {
  createCanvas(1600,400);
  speed = random (223, 321);
  weight = random (430, 52);
  thickness = random (22, 83);
  bullet = createSprite(50, 200, 50, 5);
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor=color(80, 80, 80);
  bullet . velocityX = speed
}

function draw() {
  background(0);
  if(wall.x-bullet.x < (bullet.width+wall.width)/2) {
    bullet.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22509;
    if (deformation>810)
    {
      wall.shapeColor = color(255, 0, 0);
    }
    if (deformation<810 && deformation>100)
    {
      wall.shapeColor = color(230, 230, 0);
    }
    if (deformation<100)
    {
      wall.shapeColor = color(0, 255, 0);
    }
  }
  
  drawSprites();
}
