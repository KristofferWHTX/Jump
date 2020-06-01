/// <reference path="./p5.global-mode.d.ts" />
//global vars
const spawnRate = 30;

var backLayer;
var objLayer;
var screenLayer;

var startScreen;
var endScreen;

//var player;
var enemiesList = [];

var gameStart = false;
var gameEnd = false;


var timerVal = 0;

function timeIt() {
  if (gameStart && gameEnd != true) {
    timerVal++;
  //console.log("timerval:  " + timerVal);
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
  physicsUpdate();
  update();
  backgroundUpdate();
  render();
  
}

function backgroundUpdate(){
  background(230);
 // backLayer.backgroundUpdate();

}

function physicsUpdate(){
  

}

function update(){
  spawner();
  objLayer.update();
  screenLayer.update();

}

function render(){
  backLayer.Draw();
  objLayer.Draw();
  screenLayer.Draw();

}
