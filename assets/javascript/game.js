//get a random word

//create underscores based on random words

//get user guess

//check if user guess is right 

//if right add letter from answer and replace underscore

//if wrong add letter to wrong guess



var answer = ["porsche","ferrari","toyota","mclaren","koenigsegg","nissan"];

var wrongGuess = [];   

var numberOfGuessesRemaining = 15;

var images = ["f1.jpg","f40.jpg","gtr.jpg","supra.jpg","porsche.jpg","koenigsegg.jpg"];

var randomAnswer = answer[Math.floor(Math.random() * answer.length)];

console.log(randomAnswer);

var chosenAnswer = answer[randomAnswer];

document.onkeyup = function() { 
    var userGuess = event.key.toLowercase();  

    var generateUnderscore = function(){
        for (var i = 0; i < chosenAnswer.length; i++) {
        underScore.push('_');
        }
        return underScore;
        }

}