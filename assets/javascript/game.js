    //create arrays
var answer = ["porsche", "ferrari", "toyota", "mclaren", "koenigsegg", "nissan"];
var wrongGuess = [];
var guessesRemaining = 10;
document.getElementById("guessRemaining").textcontent = guessesRemaining;
var underScore = [];
var Wins = [];



//chose word randomly from array
var randomAnswer = answer[Math.floor(Math.random() * answer.length)];
console.log(randomAnswer);
var wordSplit = randomAnswer.split("");
var generateUnderscore = function () {
    for (var i = 0; i < wordSplit.length; i++) {
        underScore.push('_');
    }
    console.log(underScore)
    return underScore;
}
generateUnderscore()

document.onkeydown = function (event) {
    var userGuess = event.key;
    var aGuess = function () {
        for (var i = 0; i < wordSplit.length; i++) {
            if (userGuess === wordSplit[i]) {
                underScore[i] = userGuess;
            }
            if (userGuess != wordSplit[i]) {
                wrongGuess.push(userGuess);
                }
        }
    }
    aGuess();
    document.getElementById("underScores").textContent = underScore.join(" ");
}



// create arrays
// choose a random word from that array
// create underscores based on how many letters in random word
// get user input and check if user input = letter in the random word 
// if it isnt guess remaining -1 and add the letter to wrong guess 
// if user guess is the same then do nothing
// repeat until all words are fully formed or out of guesses once one of them is true
// if word is fully formed win message
// if word isnt fully formed lose message
// restart the game




    

