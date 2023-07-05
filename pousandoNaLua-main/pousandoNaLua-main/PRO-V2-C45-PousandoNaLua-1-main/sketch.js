let ground;
let lander;
var lander_img;
var bg_img;
var nave_image
var nave_direita
var nave_esquerda
var normal
var vx = 0;
var g = 0.05;
var vy = 0;
var pouso_Image
var navequebrada_Image
var combustivel = 100
var obs,obs_Image
var pedra,pedra_image
var chão 


function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");
  nave_image = loadAnimation("b_thrust_1.png", "b_thrust_2.png", "b_thrust_3.png",)
  nave_direita = loadAnimation("right_thruster_1.png","right_thruster_2.png",) 
  nave_esquerda = loadAnimation("left_thruster_1.png","left_thruster_2.png")
  normal = loadAnimation("normal.png")
  pouso_Image = loadAnimation("landing1.png", "landing2.png", "landing_3.png")
  navequebrada_Image = loadAnimation("crash1.png", "crash2.png", "crash3.png")
  obs_Image = loadImage("obstacle1.png")
  pedra_image = loadImage("lz.png")
  nave_image.playing = true
  nave_image.looping = false
  nave_direita.looping = false
  nave_esquerda.looping = false
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);
  nave_image.frameDelay = 5
  nave_direita.frameDelay = 5
  nave_esquerda.frameDelay = 5
  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img)
  lander.scale = 0.1
  lander.addAnimation("nave_image",nave_image)
  lander.addAnimation("nave_direita",nave_direita)
  lander.addAnimation("nave_esquerda",nave_esquerda)
  lander.addAnimation("normal",normal)
  lander.addAnimation("navequebrada_Image",navequebrada_Image)
  chão = createSprite(500,690,1000,20);
  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
  push()
  fill(255);
  text("velocidade vertical: "+ round(vy), 800,75);
  text("velocidade horizontal: "+ round(vx), 800,50);
  text("combustivel: "+ round(combustivel), 800,25);
  pop();

  //configurar a descida da nave em y + gravidade
  vy += g
  lander.position.y += vy
  lander.position.x += vx
 if(lander.collide(chão)==true){
  lander.changeAnimation('navequebrada_Image');
  vx = 0
  vy = 0
  g = 0
 }

  drawSprites();
}
  function keyPressed(){

    if(keyCode==UP_ARROW && combustivel > 0){
      vy = -1;
      combustivel -= 1;
      lander.changeAnimation('nave_image');
    }
    if(keyCode==RIGHT_ARROW && combustivel > 0){
      vx = 1;
      combustivel -= 1;
      lander.changeAnimation('nave_esquerda');
    }
    if(keyCode==LEFT_ARROW && combustivel > 0){
      vx = -1;
      combustivel -= 1;
      lander.changeAnimation('nave_direita');
    }
  }
  function keyReleased(){

    if(keyCode==UP_ARROW){
      vy = -1;
      lander.changeAnimation('normal');
    }
  }

