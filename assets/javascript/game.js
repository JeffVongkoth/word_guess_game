//create arrays
var answer = ["porsche","ferrari","toyota","mclaren","koenigsegg","nissan"];
var wrongGuess = [];   
var Wins = [];
var guessesRemaining = 15;
var underScore = [];


//chose word randomly from array
var randomAnswer = answer[Math.floor(Math.random() * answer.length)];
console.log(randomAnswer);

var wordSplit = randomAnswer.split("");


document.onkeyup = function(event) {
    
    var userGuess = event.key;
    console.log(userGuess);

// create underscores    
    var generateUnderscore = function(){
        for (var i = 0; i < wordSplit.length; i++) {
        underScore.push('_');
        }
    
        console.log(underScore);
        return underScore;
        
    }
generateUnderscore()

var rightGuess = function() {
 for( var i = 0; i < wordSplit.length; i++) {
     if (userGuess === wordSplit[i]) 
    underScore.push(userGuess);}
    console.log(rightGuess());
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




    

