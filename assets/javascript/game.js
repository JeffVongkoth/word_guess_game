var answers = ["porsche","ferrari","toyota","mclaren","koenigsegg","nissan"]
var alreadyAnswered = []    // var alreadyAnswered= key already entered wont let enter again;
var correctAnswer = [] // fill in with var push or something
var numberOfGuessesRemaining = 15;
function myFunction() {
    correctAnswer.push(userGuess)
}



document.onkeyup = function(event) {


var userGuess = event.key.toLowercase();

var randomWord = answers[Math.floor(Math.random() * answers.length)]; }

GuessRight: function() {
    console.log(answer[0])
}