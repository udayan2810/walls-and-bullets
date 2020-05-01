var wall,thickness;
var bullet,speed,weight;
function setup() {
createCanvas(1600,400);
speed=random(223);
weight=random(30,52);
bullet = createSprite(50, 200, 50, 50);
thickness = random(22,83);
wall = createSprite(1200,200,60,thickness,height/2);
wall.shapeColor=color(80,80,80);
bullet.velocityX=speed;

}

function draw() {
background(0,0,0);
if (collided(bullet,wall))
{
if(wall.x-bullet.x < (bullet.width+wall.width)/2){
  {
    bullet.velocityX=0;
  
var damage= 0.5 * weight * speed * speed/thickness * thickness * thickness;
  }
if(damage>10)
{
wall.shapeColor=color(255,0,0);

}
if(damage<10)
{
wall.shapeColor=(0,255,0);
}
drawSprites();
}
}
}
function collided (lbullet,lwall)
{
bulletRightEdge=lbullet.x + lbullet.width;
wallLeftEdge = lwall.x;
if(bulletRightEdge>=wallLeftEdge)
{
return true; 
}
return false;
}
