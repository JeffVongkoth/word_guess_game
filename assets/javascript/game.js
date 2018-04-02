var answers = ["porsche","ferrari","toyota","mclaren","koenigsegg","nissan"]

var chr = String.fromCharCode(97 + 0);
var numberOfGuessesRemaining = 15;

document.onkeyup = function(event) {
   // var prevGuessed = key already entered wont let enter again;

var userGuess = event.key.toLowercase();

var computerGuess = blank[Math.floor(Math.random() * blank.length)]; }

GuessRight: function() {
    console.log(answer[0])
}