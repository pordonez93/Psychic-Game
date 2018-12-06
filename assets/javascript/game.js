// variable holds possible guesses
var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// variable holds the number of wins, losses, and remaining guesses
var wins = 0,
    losses = 0,
    guessesLeft = 9;
// empty array for user guesses
var guessedLetters =[];
// refrences to the places in HTML where we are going to display things
var userChoiceText = document.getElementById("userchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesText = document.getElementById("guesses-left");
// compares users guess and computers guess and adds points to wins or losses
document.onkeyup = function(event){
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
        if (userGuess === computerGuess){
            wins++;
        }else{
            losses++;
            guessesLeft--;
            guessedLetters.push(userGuess);
        }
    
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesText.textContent = "Guesses left: " + guessesLeft;
    userChoiceText.textContent= "Your guesses so far: " + guessedLetters

}