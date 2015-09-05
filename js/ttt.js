// Hi! So this turned out to be a lot more difficult than I had expected... 
// I have some refactoring to do, and eventually I want to mimick the way
// threeInARow is being used, but for 2 space and other situations. 
// Anyway, right now this is somewhat playable... some errors persist,
// but with some more time and code cleanup this will actaully work quite well.

// Thanks!

// -TJ

//starting game

window.onload = function start() {
	revTurn();
	letsPlay();
}

function boxNumID(num) {
	return document.getElementById("box" + num)
}

//determines who goes first
function letsPlay() {
	document.winner = null;
	// if (Math.random() < 0.5) {
	if (true) {
		document.move = "O";
		aiMessage(document.move + " went first");
		whoIsAi();
	} else {
		document.move = "X"
		aiMessage(document.move + " went first");
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

function aiMessage(msg) {
	document.getElementById("aimsg").innerText = msg;
}
function setMessage(msg) {
	document.getElementById("msg").innerText = msg;
}

//counter for turns
var turnNumber = 0;
function revTurn() {
	console.log('mouseClick / turnNumber = ' + (turnNumber + 1));
	turnNumber++;
}

//check for a winner, update who is playing and incremement mouse click
function checkAll() {
	winnerUser();
	document.move = "X";
	console.log("this move is " + document.move);
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

var row1a 	= false;
var row1b 	= false;
var row2a 	= false;
var row2b 	= false;
var row3a 	= false;
var row3b 	= false;
var col1a 	= false;
var col1b 	= false;
var col2a 	= false;
var col2b 	= false;
var col3a 	= false;
var col3b 	= false;
var smdia1 	= false;
var smdia2 	= false;
var smdia3 	= false;
var smdia4 	= false;
var dia1 		= false;
var dia2 		= false;
var dia3 		= false;
var dia4 		= false;
var diaend1 = false;
var diaend2 = false;
var midcolX	= false;
var midrowX	= false;
var horse1	= false;
var horse2	= false;
var horse3	= false;
var horse4	= false;
var horse5	= false;
var horse6	= false;
var horse7	= false;
var horse8	= false;
var topcornersX = false;
var bottomcornersX = false;
var firstcolcornersX = false;
var thirdcolcornersX = false;
var anyCheckWin = false;
var win = false;
var moveHold = null;

function holdThis () {
	if ( document.move == "X") {
		moveHold = "X";
	} else {
		moveHold = "O";
	}
	return moveHold;
}

function aiTurn() {
	document.move = "O";
	holdThis();

	if 	((turnNumber == 1) && (boxNumID(5).innerText == "")) {
								boxNumID(5).innerText = "O";
								checkAll();

	} else if 	 (turnNumber == 3) {
		if 				 (boxNumID(9).innerText == "") {
							 	boxNumID(9).innerText = "O";					
		} else if  (boxNumID(1).innerText == "") {
								boxNumID(1).innerText = "O";			
		}
		checkAll();
		
	} else if (turnNumber == 5) {
		anyCheck();

		if (anyCheckWin == false) {
			moveHold = "X";
			anyCheck();
			knightCheck();
		}

		checkAll();
	} else if (turnNumber == 6) {

		
	} else if (turnNumber == 7) {
		anyCheck();
		if (!(anyCheckWin && win)) {
			moveHold = "X";
			anyCheck();
			knightCheck();
		}
		checkAll();

	} else if (turnNumber == 8) {

	} else if (turnNumber == 9) {
		for (var turn9 = 1; turn9 <= 9; turn9++) {
			if (boxNumID(turn9).innerText == "") {
				boxNumID(turn9).innerText = "O";
				checkAll();
			}				
		}
	}
	
	turn();		
}

//sees who won
function winnerUser() {
	if (threeInARow(document.move)) {
		document.winner = document.move;
		if (document.move == "O") {
			alert("the computer won, as expected");
		} else {
			alert("wait, you should not have been able to win...");
		}

		location.reload();
	}
}

//I want to eventaully change my entire AI turn logic to this... here we're checking for any three in a row wins
function threeInARow(turn) {
	if (winCheck(1, 2, 3, turn) ||
			winCheck(4, 5, 6, turn) ||
			winCheck(7, 8, 9, turn) ||
			winCheck(1, 4, 7, turn) ||
			winCheck(2, 5, 8, turn) ||
			winCheck(3, 6, 9, turn) ||
			winCheck(1, 5, 9, turn) ||
			winCheck(3, 5, 7, turn)) {

			win = true;
	}
	return win;
}

function winCheck(a, b, c, turn) {
	
	if (moveCheck(a) == turn && moveCheck(b) == turn && moveCheck(c) == turn) {
		win = true;
	}
	return win;
}

// function that will return to us the innerText value for specified box. This is used in conjunction w/ threeInARow
function moveCheck(num) {
	return document.getElementById("box" + num).innerText;
}

// function endMove(num) {
// 	return document.getElementById("box" + num);
// }

//should only be run if all tiles are taken
function drawGame() {
	if (moveCheck(1) != "" && moveCheck(2) != "" && moveCheck(3) != "" && moveCheck(4) != "" && moveCheck(5) != "" && moveCheck(6) != "" && moveCheck(7) != "" && moveCheck(8) != "" && moveCheck(9) != "") {
		if (win != true) {
			alert("draw!!!")
		}
		location.reload();
	}
}

