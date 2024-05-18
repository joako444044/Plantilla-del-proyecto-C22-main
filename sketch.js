const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher, player_arm;
var baseimage;
var arm;
var angle;
//tn es Target Number, y lo voy a usar para poder anadirte una flecha y un objetivo cada que le des a un objetivo.
var tn = 4;
var arrows = [];
var targets = [];


function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);
  angle = 270
  // clases
  
  arm = new Arm(270, 250, angle, 120, 40);
  
  // objetos
  var options = {
    isStatic: true
  }
  player_arm = Bodies.rectangle(270, 250, 40, 100, options);
  World.add(world, player_arm)

  //crear el cuerpo base del jugador
  playerBase = Bodies.rectangle(200, 350, 180, 150, options);
  World.add(world, playerBase);
  //crear el cuerpo del jugador
  player = Bodies.rectangle(215, 150, 100, 200, options);
  World.add(world, player);

  
   
  

}

function draw() {
  background(backgroundImg);

  //mostrar la imagen del jugador utilizando la función image()

  //mostrar la imagen de la base del jugador utilizando la función image()


  Engine.update(engine);
  // ejecusion de funsiones de clases
  arm.build();
  spawn_targets();
  // comprovador del disparo para apareser la flecha
  
  
  
  image(baseimage, playerBase.position.x, playerBase.position.y, 180, 150);
  image(playerimage, player.position.x, player.position.y, 70, 200)
  
  // Título
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("TIRO CON ARCO ÉPICO", width / 2, 100);
  for (i = 0;i < arrows.length; i++){
    create_arrow(arrows[i])
  }
}
// funcion disparar
function keyReleased(e) {
  if (e.keyCode === LEFT_ARROW && arrows.length < tn + 1) {
    console.log("<;");
    arrows[arrows.length - 1].shoot();
    amo++
  }
}
function keyPressed(e){
  if (e.keyCode === LEFT_ARROW && arrows.length < tn) {
    
      shooting = new Arrow(285,200);
      arrows.push(shooting);
   
  }
  }

  function create_arrow(bullet){
    if (bullet){
    bullet.texture()
    }
  }
  // no se te olvide. Este es el coigo para poner tableros de objetivo.
function spawn_targets(){
  if (targets.length > 0){
  if (targets.length < tn){
    target = new Target(width - random([120,200,180,160]),height - random([70, 200,100,300,350,400,]));
    
    targets.push(target);
  }

  for (t = 0; t < targets.length; t++){
    targets[t].texture();
  }
}else{
  target = new Target(width + random([-40, -80, -120, -20]),height - random([60, 200,200]));
    targets.push(target);
   
}
}