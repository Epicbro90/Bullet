var bullet, wall, thickness;
var speed, weight;
var damage;
function setup() {
  createCanvas(1600,400);
  speed = random(223,321)
  weight = random(30,52)
  thickness = random(22,83);
  wall = createSprite(1500,200,thickness,height/2)
  bullet = createSprite(50,200,50,20)
  bullet.velocityX = speed;
  bullet.shapeColor = color("white");
}

function draw() {
  background(255,255,255);  
  drawSprites();
  if(hasCollided(bullet,wall)){
    damage = 0.5 * weight * speed * speed/(thickness *thickness *thickness);
    bullet.velocityX = 0;
    bullet.x = wall.x - 30;
    if(damage < 10){
      wall.shapeColor = color(0,255,0);
    } else {
      wall.shapeColor = color(255,0,0);
    }
    text(Math.round(damage),1300,200);
  }
}
function hasCollided(lbullet,lwall){
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x
  if(bulletRightEdge >= wallLeftEdge)
  {
    return true;
  }
  return false;
}