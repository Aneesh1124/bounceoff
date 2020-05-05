var moving, sprite,gameobject1

function setup() {
  createCanvas(800,400);
 moving = createSprite(100, 200, 50, 50);
 sprite = createSprite(700,200,70,70)
 gameobject1 = createSprite(400,200,60,60)
// moving.velocityX = 3
 //moving.velocityY = 3
 //sprite.velocityX = -3
 //sprite.velocityY = -3
}

function draw() {
  background(180,220,170);  
  moving.x = mouseX
  moving.y = mouseY
  if(isTouching(moving,sprite)){
    moving.shapeColor = "red"
    sprite.shapeColor = "green"
//moving.velocityX = -3
//moving.velocityY = -3
//sprite.velocityX = 3
//sprite.velocityY = 3
  }
  if(isTouching (moving,gameobject1)){
    moving.shapecolor = "red"
    gameobject1.shapeColor = "yellow"
  }
  drawSprites();
}
function isTouching(object1,object2){
  if(object1.x-object2.x<object1.width/2+object2.width/2
    &&object2.x-object1.x<object1.width/2+object2.width/2
    &&object2.y-object1.y<object1.height/2+object2.height/2
    &&object1.y-object2.y<object1.height/2+object2.height/2){
   return true
 }
}