var bg,bgImg
var pistol,pistolImage
var bulletGroup,bulletImage
var gameState = 1


function preload(){
  pistolImage = loadImage("transparent_pistol.png")
  bgImg = loadImage("background_image.jpeg")
  bulletImage = loadImage("download-removebg-preview.png")
 
}
function setup() {
  createCanvas(1000,600);
  bg = createSprite(750,250,1,1)
  bg.addImage(bgImg)
  bg.scale = 4

  pistol = createSprite(100,height/2,50,50)
  pistol.addImage(pistolImage)
  pistol.scale=0.5

  bulletGroup = createGroup()
}




function draw() {
 background ("blue")
  
   if (gameState ===1){
   pistol.y = mouseY
   }
   if(keyDown("space")){
   shootBullet();
   }
  drawSprites()
}
  

function shootBullet(){
  bullet= createSprite(235, width/2 , 50,20)
  bullet.y= pistol.y-20
  bullet.addImage(bulletImage)
  bullet.scale=0.4
  bullet.velocityX= 7
  bulletGroup.add(bullet)
 }

