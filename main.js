/// <reference path="./p5.global-mode.d.ts" />
//global vars
const spawnRate = 30;
//layer variables
var backLayer;
var objLayer;
var screenLayer;
//screen variables
var startScreen;
var endScreen;
//enemy array and player variable
var enemiesList = [];
var player;

//gamestate variables
var gameStart = false;
var gameEnd = false;

//timer variable
var timerVal = 0;
//timer runs when game is started
function timeIt() {
  if (gameStart && gameEnd != true) {
    timerVal++;
  }
}



function setup() {
  createCanvas(windowWidth, windowHeight );
  setInterval(timeIt, 100);


  objLayer = new ObjectLayer(); //create object layer
  backLayer = new BackgroundLayer(); //create background layer
  screenLayer = new ScreenLayer(); //create start layer

  startScreen = new StartScreen();
  endScreen = new EndScreen();
  


  player = new Player(objLayer, "move"); //create player object on objLayer
  
  back = new Background();
}



function draw() {
  clear();
  update();
  render();
  
}

function update(){
  spawner();
  objLayer.update();
  screenLayer.update();

}

function render(){
  background(230);
  backLayer.Draw();
  objLayer.Draw();
  screenLayer.Draw();

}
