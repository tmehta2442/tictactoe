var moveHold = null;
var turnNumber = 0;
var numO = 0

//determines who goes first
function letsPlay() {
	document.winner = null;
	if (Math.random() < 0.5) {
	//if (true) {
		document.move = "O";
		whoIsAi();
	} else {
		document.move = "X"
		setMessage("You go first as X");
		whoIsAi();
	}

}

//running up AI or turn depending on document.move
function whoIsAi(){
	if (document.move == "X"){
		turn();
	} else {
		aiTurn();
	}
}


function boxNumID(num) {
	return document.getElementById("box" + num)
}

function holdThis () {
	if ( document.move == "X") {
		moveHold = "X";
	} else {
		moveHold = "O";
	}
	return moveHold;
}

function setMessage(msg) {
	document.getElementById("msg").innerText = msg;
}

//check for a winner, update who is playing and incremement mouse click
function checkAll() {
	winnerUser();
	document.move = "X";
	setMessage("Your move");
	revTurn();
}

//checking if game is a draw, counter for turn increased, container for "holdThis" modified for AI logic, then the aiturn is run
function withinTurn() {
	revTurn();
	holdThis();
	aiTurn();
	drawGame();
}

//counter for turns
function revTurn() {
	turnNumber++;
}


function countO() {
	numO = 0;
	for (var i = 1; i <= 9; i++) {
		if (boxNumID(i).innerText == "O") {
			numO++
		}
	}
}