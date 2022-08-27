var garden,rabbit;
var gardenImg,rabbitImg;
var apple,orange,red
var appleImg,orangeImg,redImg


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  
   //Obs.: apenas essa variaévl de maça está sendo adicionada como imagem em todas as functions
  appleImg = loadImage("apple.png");
  
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){ //abriu a function setup
  
  createCanvas(400,400);
  

garden=createSprite(200,200);
garden.addImage(gardenImg);


rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}//chave fechando a function setup

function createApples() {
  apple = createSprite(random(50, 350), 40, 10, 10);
 
  apple.addImage(appleImg);
  apple.scale = 0.07;
  apple.velocityY = 3;
  apple.lifetime = 150;
}

function createOrange() {
  orange = createSprite(random(50, 350), 40, 10, 10);
  orange.addImage(appleImg);
  orange.scale = 0.07;
  orange.velocityY = 3;
  orange.lifetime = 150;
}

function createRed() {
  red = createSprite(random(50, 350), 40, 10, 10);
  red.addImage(appleImg);
  red.scale = 0.07;
  red.velocityY = 3;
  red.lifetime = 150;
}

//esse trecho de código daqui até...
/*var select_sprites = Math.round(random(1,3));
if (frameCount %80 == 0) {
  if (select_sprite == 1){
    createApples();
  } else if (select_sprite == 2){
    createOrange();
  } else {
    createRed();
  }
  rabbit.x = World.mouseX;
} */
//..aqui está fora de escopo, ou seja solta sem ser invocado dentro da function, movi dentro da function draw


function draw() {
  background(0);

  //acertar variaveis
  var select_sprites = Math.round(random(1,3));
    if (frameCount %80 == 0) {
      if (select_sprites == 1){
        createApples();
      } else if (select_sprites == 2){
        createOrange();
      } else {
        createRed();
      }
      rabbit.x = World.mouseX;
    }
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
  
}
