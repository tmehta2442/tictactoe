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