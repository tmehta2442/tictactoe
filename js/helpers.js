var moveHold = null;
var turnNumber = 0;
var numO = 0

//counter for turns
function revTurn() {
	turnNumber++;
}

//determines who goes first
//a simple random is put in to see who goes first
//if less than 0.5 then AI goes first
//	--at that point aiTurn is spun up and we're off to the races!
//if more than 0.5 turn is spun up which is what will capture the user's move
function letsPlay() {
	document.winner = null;
	//if (Math.random() < 0.5) {
	if (true) {
		document.move = "O";
		aiTurn();
	} else {
		document.move = "X"
		setMessage("You go first as X");
		turn();
	}

}

//created this so I can just type boxNumID(*) rather than the entire contents of the function. Works ver nicely!
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


//determins the number of "O's" on the board
function countO() {
	numO = 0;
	for (var i = 1; i <= 9; i++) {
		if (boxNumID(i).innerText == "O") {
			numO++
		}
	}
}