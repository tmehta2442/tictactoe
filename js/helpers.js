var moveHold = null;
var turnNumber = 0;
var numO = 0

//determines who goes first
function letsPlay() {
	document.winner = null;
	if (Math.random() < 0.5) {
	//if (true) {
		document.move = "O";
		aiMessage(document.move + " went first");
		whoIsAi();
	} else {
		document.move = "X"
		aiMessage(document.move + " went first");
		whoIsAi();
	}

}

//setting a message & letting player go first, or running up AI  depending on document.move
function whoIsAi(){
	if (document.move == "X"){
		turn();
		setMessage(document.move + "'s move");
	} else {
		aiTurn();
		setMessage(document.move + "'s move");
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

function aiMessage(msg) {
	document.getElementById("aimsg").innerText = msg;
}
function setMessage(msg) {
	document.getElementById("msg").innerText = msg;
}

//check for a winner, update who is playing and incremement mouse click
function checkAll() {
	winnerUser();
	document.move = "X";
	setMessage(document.move + "'s move");
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