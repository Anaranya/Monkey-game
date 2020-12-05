
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0;
var ground;
var survivalTime = 0;
var bananaGroup , obstacleGroup;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);

  bananaGroup = new Group();
  obstacleGroup = new Group();
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("running" , monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  
  
}


function draw() {
background("white");
 
 ground = createSprite(400,350,900,10)
 ground.velocityX = 4;
 ground.x = ground.width/2;
  
  if(keyDown("space")){
    monkey.velocityY =-4;   
  }
  
  monkey.collide(ground);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score" + score ,500 , 50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Surival Time" + survivalTime, 100, 50);
  
  
  
  obstacles();
  
  food();
  
  drawSprites();
}

function food(){
  if(frameCount % 80){ 
    banana = createSprite(600, Math.round(random(120,200)), 20,20);
    banana.addImage(bananaImage);
    banana.velocityX = -4;
    banana.lifetime = 400;
    bananaGroup.add(banana);
    banana.scale = 0.05;
  }
}

 function obstacles(){
   if(frameCount % 300){
     obstacle = createSprite(600,315,20,20);
     obstacle.addImage(obstacleImage);
     obstacle.velocityX = -4;
     obstacle.scale = 0.2;
     obstacle.lifetime = 500;
   }
 }


