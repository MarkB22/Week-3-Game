// This array holds the words we are going to choose from.
// Feel free to add new words!
var words = ['cat', 'tree', 'swing', 'around', 'scientist', 'burger', 'dog', 'Tug Boat', 'bacon', 'horse', 'fight', 'fire' ];
var userGuess;
var goodLetters = new Array();
var badGuesses= 0;

userGuess = prompt("Pick A Letter")
console.log(userGuess) 


// This function will pick our word
function chooseWord (words) {
		var i = Math.floor(Math.random()* words.length)
		console.log(words)

}    