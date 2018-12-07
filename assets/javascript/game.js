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

// function to restart game
function restart() {
    computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    guessesLeft = 9;
    userChoiceText.innerHTML= " ";
    guessedLetters.innerHTML = " ";
}

restart();
document.onkeyup = function(event){
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
        //Alerts user if they didn't select a letter key
        if (computerChoice.indexOf(userGuess) === -1){
            alert("That is not a letter! Choose again.");
            return
        }
        //compares userguess and computerguess and assigns points accordingly
        if (userGuess === computerGuess && guessesLeft > 0){
            wins++;
            // console.log(computerChoice);
            restart();
        }else if (guessesLeft > 0){
            guessesLeft--;
            guessedLetters.push(userGuess);
            console.log(userGuess);
        //if user runs out of guess/equals 0, guesses resets and a point is added to losses
        }else{
            losses++;
            userChoiceText.innerHTML= " ";
            restart();
        }
// prints out results to page
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesText.textContent = "Guesses left: " + guessesLeft;
    userChoiceText.textContent= "Your guesses so far: " + guessedLetters
// if guesses remaining = 0 add to losses and reset
// if user wins reset game
}