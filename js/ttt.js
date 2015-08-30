window.onload = function start() {
	letsPlay();
	boxNumClass();
	mouseClicked();
}

function boxNumID(num) {
	return document.getElementById("box" + num)
}

function boxNumClass(ece) {
	numClass = document.getElementsByClassName(ece);

	for (var i = 0; i < numClass.length; i++) {
		var testing = numClass[i].innerText;
		console.log(testing + " inner");
		return testing;
	}
}

function letsPlay() {
	document.winner = null;
	if (Math.random() < 0.5) {
		document.move = "O";
		aiMessage(document.move + "'s move letsPlay");
	} else {
		document.move = "X"
	}
	whoIsAi();
}

function whoIsAi(){
	if (document.move == "X"){
		setMessage(document.move + "'s move whoisAI");
		turn();
	} else {
		aiTurn();
	}
}

function aiMessage(msg) {
	document.getElementById("aimsg").innerText = msg;
}
function setMessage(msg) {
	document.getElementById("msg").innerText = msg;
}
var box1A

function turn() {
	
	boxNumID(1).onclick = function() {if( (boxNumID(1).innerText) == ""){(this).innerText = document.move; withinTurn(); box1A = boxNumID(1).innerText;} else {alert("already played");}}
	boxNumID(2).onclick = function() {if( (boxNumID(2).innerText) == ""){(this).innerText = document.move; withinTurn();} else {alert("already played");}} 
	boxNumID(3).onclick = function() {if( (boxNumID(3).innerText) == ""){(this).innerText = document.move; withinTurn();} else {alert("already played");}} 
	boxNumID(4).onclick = function() {if( (boxNumID(4).innerText) == ""){(this).innerText = document.move; withinTurn();} else {alert("already played");}} 
	boxNumID(5).onclick = function() {if( (boxNumID(5).innerText) == ""){(this).innerText = document.move; withinTurn();} else {alert("already played");}} 
	boxNumID(6).onclick = function() {if( (boxNumID(6).innerText) == ""){(this).innerText = document.move; withinTurn();} else {alert("already played");}} 
	boxNumID(7).onclick = function() {if( (boxNumID(7).innerText) == ""){(this).innerText = document.move; withinTurn();} else {alert("already played");}} 
	boxNumID(8).onclick = function() {if( (boxNumID(8).innerText) == ""){(this).innerText = document.move; withinTurn();} else {alert("already played");}} 
	boxNumID(9).onclick = function() {if( (boxNumID(9).innerText) == ""){(this).innerText = document.move; withinTurn();} else {alert("already played");}}
}

function changeTurn() {

}
var turnNumber = 0;
var mouseClicked = function() {
	console.log('mouseClick / turnNumber = ' + turnNumber);
	turnNumber++;
}

function checkAll() {
	document.move = "X";
	console.log("this move is " + document.move);
	setMessage(document.move + "'s move ai turn");
	winnerUser();
		
}

function withinTurn() {
	winnerUser();
	aiTurn();
	drawGame();
	mouseClicked();
}

var box1A
function aiTurn() {
	document.move = "O";
	// num2 = Math.floor(Math.random()*(9)+1);
	// console.log(num2);
	if (				turnNumber == 0) {
							boxNumID(5).innerText = "O";
							checkAll();
	} else if ((turnNumber == 1) && (boxNumID(5).innerText != "X")) {
							boxNumID(5).innerText = "O";
							checkAll();
	} else if ((turnNumber == 1) && (boxNumID(5).innerText == "X")) {
							boxNumID(9).innerText = "O";
							checkAll();							
	}





	// else if ( ( 	boxNumID(5).innerText == "O") || (boxNumID(5).innerText == "X")) {
	// 								boxNumID(7).innerText = "O";
	// 								checkAll();
	// } else if ( (		boxNumID(2).innerText == "X") || (boxNumID(4).innerText == "X") || (boxNumID(6).innerText == "X") || (boxNumID(8).innerText == "X") ) {
	// 	if 			(	(	(	boxNumID(2).innerText == "X") || (boxNumID(4).innerText == "X")) &&  (boxNumID(9) != "O") ) {
	// 								boxNumID(9).innerText = "O";
	// 								checkAll();
	// 	} else if (	(	boxNumID(6).innerText == "X") || (boxNumID(8).innerText == "X") ) {
	// 								boxNumID(1).innerText = "O";
	// 								checkAll();		
	// 	}

	// }	else if ( (	boxNumID(1).innerText == "X") || (boxNumID(3).innerText == "X") || (boxNumID(7).innerText == "X") || (boxNumID(9).innerText == "X") ) {
	// 	alert("working!! 1");
	// 	if (			(	boxNumID(2).innerText == "X") || (boxNumID(4).innerText == "X") ) {
	// 		alert("working!! 2");
	// 							// boxNumID(1).innerText = "O";
	// 	} else if ((boxNumID(6).innerText == "X") || (boxNumID(8).innerText == "X") ) {
	// 							boxNumID(1).innerText = "O";
	// 	}		
	// }

	// else if ( ( boxNumID(9).innerText != "O") && (boxNumID(9).innerText != "X")) {
	// 							boxNumID(9).innerText = "O";
	// 							setMessage(document.move + "'s move ai turn 9");
	// 							winnerUser();
	// 							document.move = "X";
	// } else if ( ( boxNumID(3).innerText != "O") && (boxNumID(3).innerText != "X")) {
	// 							boxNumID(3).innerText = "O";
	// 							setMessage(document.move + "'s move ai turn 3");
	// 							winnerUser();
	// 							document.move = "X";
	// } else if ( ( boxNumID(4).innerText != "O") && (boxNumID(4).innerText != "X")) {
	// 							boxNumID(4).innerText = "O";
	// 							setMessage(document.move + "'s move ai turn 4");
	// 							winnerUser();
	// 							document.move = "X";
	// } else if ( ( boxNumID(6).innerText != "O") && (boxNumID(6).innerText != "X")) {
	// 							boxNumID(6).innerText = "O";
	// 							setMessage(document.move + "'s move ai turn 6");
	// 							winnerUser();
	// 							document.move = "X";
	// }
	turn();		
}

function winnerUser() {
	if (threeInARow(document.move)) {
		document.winner = document.move;
		alert("Congrats, " + document.move + " you win! Lets play again winnerUser");
		location.reload();
	}
}

function threeInARow(turn) {
	var win = false;
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
	var win = false;
	if (moveCheck(a) == turn && moveCheck(b) == turn && moveCheck(c) == turn) {
		win = true;
	}
	return win;
}

function moveCheck(num) {
	return document.getElementById("box" + num).innerText;
}

function drawGame() {
	if (moveCheck(1) != "" && moveCheck(2) != "" && moveCheck(3) != "" && moveCheck(4) != "" && moveCheck(5) != "" && moveCheck(6) != "" && moveCheck(7) != "" && moveCheck(8) != "" && moveCheck(9) != "") {
		alert("draw!!!")
		location.reload();
	}
}


