// variable holds possible guesses
var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// variable holds the number of wins, losses, and remaining guesses
var wins = 0,
    losses = 0,
    guessesLeft = 10;
// holds the users guesses
var guessArray = [];
// refrences to the places in HTML where we are going to display things
var userChoiceText = document.getElementById("userchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesText = document.getElementById("guesses-left");

document.onkeyup = function(event){
    var userGuess = event.key;
    var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];

    if (userGuess === computerGuess){
        wins++;
    }else{
        losses++;
        guessesLeft--;
    }

    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesText.textContent = "Guesses left: " + guessesLeft;
    userChoice.textContent = "Your guesses so far: " + userGuess;
}