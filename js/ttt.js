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
var turnNumber = 0;

//determines who goes first
function letsPlay() {
	document.winner = null;
	if (Math.random() < 0.5) {
		document.move = "O";
		aiMessage(document.move + " went first");
		
	} else {
		document.move = "X"
		aiMessage(document.move + " went first");
	}
	whoIsAi();
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

//this calls the "ai" based on turn
function aiTurn() {
	document.move = "O";
	holdThis();

//TURN1
	if ((turnNumber == 1) && (boxNumID(5).innerText == "")) {
		boxNumID(5).innerText = "O"; checkAll();
	} 
//TURN2
	else if (turnNumber == 2) {
		if (boxNumID(5).innerText == "") {
			boxNumID(5).innerText = "O"
		} else {
			boxNumID(7).innerText = "O"
		}
		checkAll();
//TURN3
	}	else if 	 (turnNumber == 3) {
		if 				 (boxNumID(9).innerText == "") {
							 	boxNumID(9).innerText = "O";					
		} else if  (boxNumID(1).innerText == "") {
								boxNumID(1).innerText = "O";			
		}
		checkAll();
//TURN4
	}	else if (turnNumber == 4) { 
		moveHold = "X";
		anyCheck();
		if (anyCheckWin == false) {
			if (diaCheck2() && (boxNumID(7).innerText == "O")) {
				if (boxNumID(1).innerText == "") {
					boxNumID(1).innerText = "O";
				} else if (boxNumID(9).innerText == "") {
					boxNumID(9).innerText = "O"
				}
			}
			knightCheck();
			cornerCheck();
		}
		checkAll();
//TURN5
	}	else if (turnNumber == 5) {
		anyCheck();
		if (anyCheckWin == false) {
			moveHold = "X";
			knightCheck();
		}
		checkAll();
//TURN6
	} else if (turnNumber == 6) {
		moveHold = "X";
		anyCheck();
		if (threeInARow()) { 
			checkAll();
		} else if (!(anyCheckWin && win)) {
			moveHold = "X";
			knightCheck();
			checkAll();
		}
//TURN7
	} else if (turnNumber == 7) {
		anyCheck();
		if (!(anyCheckWin && win)) {
			moveHold = "X";
			knightCheck();
		}
		checkAll();
//TURN8
	} else if (turnNumber == 8) {
		moveHold = "X";
		anyCheck();
		if (!(anyCheckWin && win)) {
			moveHold = "O";
			knightCheck();
		}
		checkAll();
//TURN9
	} else if (turnNumber == 9) {
		if (document.move == "O") {
			for (var turn9 = 1; turn9 <= 9; turn9++) {
				if (boxNumID(turn9).innerText == "") {
					boxNumID(turn9).innerText = "O";
					checkAll();
				}				
			}
		}
	}
	
	turn();		
}




