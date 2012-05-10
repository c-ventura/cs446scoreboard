var guessesLeft = 10;
var highScores = new Array([9, "HarryJamesPotter"], [3, "ZedCthulhu"], [2, "NearlyDied"]);
var correctNum = Math.floor(Math.random()*100) + 1;
var guess = 1;




$(function() {
  updateScore(guessesLeft);
  populateHighScores(highScores);
  //updateGuesses(guessesLeft);
  //guessNumber(guess);
  //winparty();
  
});

function populateHighScores(scores) {
  for (var i = 0; i < scores.length; ++i) {
    $('div#highScores').append("<p>" + scores[i][0] + " " + scores[i][1] + "</p>");
  }
}

function updateScore(score) {
  $('h2#score span#guessesLeft').html(score);
}

function updateGuesses(){
  guessesLeft = guessesLeft-1;
  $('h2#score span#guessesLeft').html(guessesLeft);
}

function guessNumber(){
   guess = document.getElementById("guess").value;
   if(guess > 100 || guess < 1){
      msgMaybe("Out of bounds. An extra life taken as punishment!");
	  updateGuesses();
   }else if(guess > correctNum){
    msgMaybe("Too high!");
	//updateHighScores(scores);
  }else if(guess < correctNum){
    msgMaybe("Too low!!!");
  
  }else{
    winparty();
  }
  updateGuesses();
  
  if(guessesLeft === 0){
    sadparty();
  }
}

function winparty(){
  msgMaybe("Hooray! You lived/won!");
  playAgain();
  
  var winner = prompt("Champion's Name?", "");
  var winnerList = new Array([guessesLeft, winner]);
  populateHighScores(winnerList);
}

function sadparty(){
  msgMaybe("Sad day, you died/lost.");
  playAgain();
}

function msgMaybe(massage){
$('h1#msgtext').html(massage);
}

function playAgain(){
$('h2#reload').html(" <a href=\"javascript:location.reload(true)\">Play Again?</a> ");


}