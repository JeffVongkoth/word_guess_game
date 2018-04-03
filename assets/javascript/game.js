var answers = ["porsche","ferrari","toyota","mclaren","koenigsegg","nissan"]
var alreadyAnswered = []    // var alreadyAnswered= key already entered wont let enter again;
var correctAnswer = [] // fill in with var push or something
var numberOfGuessesRemaining = 15;
var images = ["f1.jpg","f40.jpg","gtr.jpg","supra.jpg","porsche.jpg","koenigsegg.jpg"]
function myFunction() {
    correctAnswer.push(userGuess)
}



document.onkeyup = function(event) {


var userGuess = event.key.toLowercase();

var randomWord = answers[Math.floor(Math.random() * answers.length)]; }
if (event.key === answers.porsche[0]
GuessRight: function() {
    console.log(answer[0])
}

function displayImage(){

    //the first statement should generate a random number in the range 0 to 6 (the subscript values of the image file names in the imagesArray)
    var num = Math.floor(Math.random() * 6); // 0...6
    //the second statement display the random image from the imagesArray array in the canvas image using the random number as the subscript value
    document.images.src = imagesArray[num];