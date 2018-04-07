//create arrays
var answer = ["porsche", "ferrari", "toyota", "mclaren", "koenigsegg", "nissan"];
var wrongGuess = [];
var correctGuess = [];
var guessesRemaining = 15;
var underScore = [];
var Wins = [];
var gameStart = false;


//chose word randomly from array
var randomAnswer = answer[Math.floor(Math.random() * answer.length)];
console.log(randomAnswer);
var wordSplit = randomAnswer.split("");
var generateUnderscore = function () {
    for (var i = 0; i < wordSplit.length; i++) {
        underScore.push('_');
    }
    return underScore;
}
console.log(generateUnderscore());

    document.onkeydown = function (event) {
        var userGuess = event.key;
 
        if (event.keyCode == 13) {
            wrongGuess = [];
            correctGuess = [];
            guessesRemaining = 15;
            underScore = [];
            gameStart = true;
            
            document.getElementById("underScores").textContent = generateUnderscore("");

            var rightGuess = function (userGuess) {
                for (var i = 0; i < wordSplit.length; i++) {
                    if (userGuess === wordSplit[i])
                        correctGuess.push(userGuess);
                }
                return correctGuess;
                console.log(rightGuess());
            }

        }
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




    

