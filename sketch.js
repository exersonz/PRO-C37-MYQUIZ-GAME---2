var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");
  if(contestantCount === 2){
    quiz.update(1);
  }
  console.log(gameState);

  if(gameState === 1){
    clear();
    console.log("a");
    quiz.play();
    console.log("b");
  }
}
