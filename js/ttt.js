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
	//if (Math.random() < 0.5) {
	if (true) {
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
	function mouseClicked() {
	console.log('mouseClick / turnNumber = ' + turnNumber);
	turnNumber++;
}

function checkAll() {
	winnerUser();
	document.move = "X";
	console.log("this move is " + document.move);
	setMessage(document.move + "'s move ai turn");
	mouseClicked();

	
		
}

function withinTurn() {
	mouseClicked();
	xHasCornerCheck();
	xHasEdgeCheck();
	xHasSquare1Check();
	xHasSquare2Check();
	xHasSquare3Check();
	xHasSquare4Check();
	// rowCheck1a();
	// rowCheck1b();
	// rowCheck2a();
	// rowCheck2b();
	// rowCheck3a();
	// rowCheck3b();
	// colCheck1a();
	// colCheck1b();
	// colCheck2a();
	// colCheck2b();
	// colCheck3a();
	// colCheck3b();
	// diaCheck1();
	// diaCheck2();
	// diaCheck3();
	// diaCheck4();
	aiTurn();
	drawGame();

}
var haveCenter 	= false;

var xHasCorner 	= false;
var xHasEdge 		=	false;
var xHasSquare1 = false;
var xHasSquare2 = false;
var xHasSquare3 = false;
var xHasSquare4 = false;


var row1a = false;
var row1b = false;
var row2a = false;
var row2b = false;
var row3a = false;
var row3b = false;
var col1a = false;
var col1b = false;
var col2a = false;
var col2b = false;
var col3a = false;
var col3b = false;
var dia1 	= false;
var dia2 	= false;
var dia3 	= false;
var dia4 	= false;
var topCornersX = false;
var bottomCornersX = false;
var firstColCornersX = false;
var thirdColCornersX = false;

function topCorners() {
	if	((boxNumID(1).innerText == "X") && (boxNumID(3).innerText == "X")) {
		topCornersX = true;
		return topCornersX;
	}
}

function bottomCorners() {
	if	((boxNumID(7).innerText == "X") && (boxNumID(9).innerText == "X")) {
		bottomCornersX = true;
		return bottomCornersX;
	}
}

function firstColCorners() {
	if	((boxNumID(1).innerText == "X") && (boxNumID(7).innerText == "X")) {
		firstColCornersX = true;
		return firstColCornersX;
	}
}

function thirdColCorners() {
	if	((boxNumID(3).innerText == "X") && (boxNumID(9).innerText == "X")) {
		thirdColCornersX = true;
		return thirdColCornersX;
	}
}

function rowCheck1a() {
	if ( (boxNumID(1).innerText == "X") && (boxNumID(2).innerText == "X")) {
		row1a = true;
		return row1a;
	}
}

function rowCheck1b() {
	if ( (boxNumID(2).innerText == "X") && (boxNumID(3).innerText == "X")) {
		row1a = true;
		return row1b;
	}
}
function rowCheck2a() {
	if ( (boxNumID(4).innerText != "X") && (boxNumID(5).innerText != "X")) {
		row2a = true;
		return row2a;
	}
}
function rowCheck2b() {
	if ( (boxNumID(5).innerText == "X") && (boxNumID(6).innerText == "X")) {
		row2a = true;
		return row2a;
	}
}
function rowCheck3a() {
	if ( (boxNumID(7).innerText == "X") && (boxNumID(8).innerText == "X")) {
		row2a = true;
		return row2a;
	}
}
function rowCheck3b() {
	if ( (boxNumID(8).innerText == "X") && (boxNumID(9).innerText == "X")) {
		row2a = true;
		return row2a;
	}
}
function colCheck1a() {
	if ( (boxNumID(1).innerText == "X") && (boxNumID(4).innerText == "X")) {
		row2a = true;
		return row2a;
	}
}
function colCheck1b() {
	if ( (boxNumID(4).innerText == "X") && (boxNumID(7).innerText == "X")) {
		row2a = true;
		return row2a;
	}
}
function colCheck2a() {
	if ( (boxNumID(2).innerText == "X") && (boxNumID(5).innerText == "X")) {
		col2a = true;
		return col2a;
	}
}
function colCheck2b() {
	if ( (boxNumID(5).innerText == "X") && (boxNumID(8).innerText == "X")) {
		col2b = true;
		return col2b;
	}
}
function colCheck3a() {
	if ( (boxNumID(3).innerText == "X") && (boxNumID(6).innerText == "X")) {
		col3a = true;
		return col3a;
	}
}
function colCheck3b() {
	if ( (boxNumID(6).innerText == "X") && (boxNumID(9).innerText == "X")) {
		col3b = true;
		return col3b;
	}
}
function diaCheck1() {
	if ( (boxNumID(1).innerText == "X") && (boxNumID(5).innerText == "X")) {
		dia1 = true;
		return dia1;
	}
}
function diaCheck2() {
	if ( (boxNumID(3).innerText == "X") && (boxNumID(5).innerText == "X")) {
		dia2 = true;
		return dia2;
	}
}
function diaCheck3() {
	if ( (boxNumID(7).innerText == "X") && (boxNumID(5).innerText == "X")) {
		dia3 = true;
		return dia3;
	}
}
function diaCheck4() {
	if ( (boxNumID(9).innerText == "X") && (boxNumID(5).innerText == "X")) {
		dia4 = true;
		return dia4;
	}
}
function xHasCornerCheck() {
	if ( (boxNumID(1).innerText == "X") || (boxNumID(3).innerText == "X") || (boxNumID(7).innerText == "X") || (boxNumID(9).innerText == "X") ) {
		xHasCorner = true;
	} else {
		xHasCorner = false;
	}
}

function xHasEdgeCheck() {
	if ( (boxNumID(2).innerText == "X") || (boxNumID(4).innerText == "X") || (boxNumID(6).innerText == "X") || (boxNumID(8).innerText == "X") ) {
		xHasEdge = true;
	} else {
		xHasEdge = false;
	}
}

function xHasSquare1Check() {
	if ( (boxNumID(1).innerText == "X") || (boxNumID(2).innerText == "X") || (boxNumID(4).innerText == "X") || (boxNumID(5).innerText == "X") ) {
		xHasSquare1 = true;
	} else {
		xHasSquare1 = false;
	}
}

function xHasSquare2Check() {
	if ( (boxNumID(2).innerText == "X") || (boxNumID(3).innerText == "X") || (boxNumID(5).innerText == "X") || (boxNumID(6).innerText == "X") ) {
		xHasSquare2 = true;
	} else {
		xHasSquare2 = false;
	}
}

function xHasSquare3Check() {
	if ( (boxNumID(4).innerText == "X") || (boxNumID(5).innerText == "X") || (boxNumID(7).innerText == "X") || (boxNumID(8).innerText == "X") ) {
		xHasSquare3 = true;
	} else {
		xHasSquare3 = false;
	}
}

function xHasSquare4Check() {
	if ( (boxNumID(5).innerText == "X") || (boxNumID(6).innerText == "X") || (boxNumID(8).innerText == "X") || (boxNumID(9).innerText == "X") ) {
		xHasSquare4 = true;
	} else {
		xHasSquare4 = false;
	}
}


var box1A
function aiTurn() {
	document.move = "O";
	
	if (				turnNumber == 0) {
							boxNumID(5).innerText = "O";
							haveCenter = true;
							checkAll();
	} else if ((turnNumber == 1) && (boxNumID(5).innerText == "")) {
							boxNumID(5).innerText = "O";
							haveCenter = true;
							checkAll();
	} else if ((turnNumber == 3)) {
		if 			( boxNumID(9).innerText == "") {
							boxNumID(9).innerText = "O";
							checkAll();
		} else if(boxNumID(1).innerText == "") {
							boxNumID(1).innerText = "O";
							checkAll();
		}

	} else if ((turnNumber == 4)) {

			
	} else if ((turnNumber == 5)) {
		if 			( boxNumID(1).innerText == "") {
							boxNumID(1).innerText = "O"
							checkAll();
		} else if((boxNumID(1).innerText == "X") && (boxNumID(6).innerText == "X") && (boxNumID(8).innerText == "")) {
							boxNumID(8).innerText = "O";
							checkAll();
		} else if((boxNumID(1).innerText == "X") && (boxNumID(8).innerText == "X") && (boxNumID(3).innerText == "")) {
							boxNumID(3).innerText = "O";
							checkAll();
		} else if(topCorners() 			&& 	(boxNumID(2).innerText == "")) {
							boxNumID(2).innerText = "O";
							checkAll();
		} else if(topCorners() 			&& 	(boxNumID(2).innerText == "")) {
							boxNumID(2).innerText = "O";
							checkAll();
		} else if(firstColCorners() && 	(boxNumID(4).innerText == "")) {
							boxNumID(4).innerText = "O"
							checkAll();
		} else if(bottomCorners() 	&&	(boxNumID(8).innerText == "")) {
							boxNumID(8).innerText = "O"
							checkAll();
		} else if(rowCheck1a() 			&& 	(boxNumID(3).innerText == "")) {
							(boxNumID(3).innerText = "O")
							checkAll();
		}	 else if(colCheck1a() 		&& 	(boxNumID(7).innerText == "")) {
							(boxNumID(7).innerText = "O")
							checkAll();
		}
		// } else if (xHasSquare1 && (boxNumID(1).innerText == "X") && (boxNumID(2).innerText == "X")) {
		// 					boxNumID(3).innerText = "O";
		// 					checkAll();
		// }  else if (xHasSquare1 && (boxNumID(1).innerText == "X") && (boxNumID(7).innerText == "X")) {
		// 					boxNumID(4).innerText = "O";
		// 					checkAll();
		// } else if (xHasSquare1 && (boxNumID(1).innerText == "X") && (boxNumID(2).innerText != "X") && (boxNumID(2).innerText == "X")) {
		// 					boxNumID(2).innerText = "O";
		// 					checkAll();
		// } else if (col1a && (boxNumID(7).innerText != "X")) {
		// 					boxNumID(7).innerText = "O";
		// 					checkAll();
		// } else if (col1a && (boxNumID(3).innerText == "X") && (boxNumID(9).innerText == "X")){
		// 					boxNumID(6).innerText = "O";
		// 					checkAll();
		// } else if (col1a && (boxNumID(7).innerText != "X") (boxNumID(7).innerText != "X") ) {
		// 					boxNumID(7).innerText = "O";
		// 					checkAll();
		// }
		// else if (xHasSquare3 || (boxNumID(6).innerText == "X") && (boxNumID(3).innerText != "X")) {
		// 					boxNumID(3).innerText = "O";
		// 					checkAll();
		// }
	} else if ( turnNumber == 6) {
		if 			((xHasSquare3 || (boxNumID(6).innerText == "X")) && (boxNumID(3).innerText != "X")) {
							boxNumID(3).innerText = "O";
							checkAll();
		} 
	} else if ( turnNumber == 7) {
		if 			( xHasSquare2 && (boxNumID(2).innerText == "")) {
							boxNumID(2).innerText = "O";
							checkAll();
		}	else if ((boxNumID(2).innerText == "0") && (boxNumID(3).innerText == "0") && (boxNumID(8).innerText == "")) {
							boxNumID(8).innerText = "O";
							checkAll();
		}		else if ((boxNumID(1).innerText == "X") && (boxNumID(2).innerText == "X") && (boxNumID(7).innerText == "X")) {
							boxNumID(6).innerText = "O";
							checkAll();
		}	else if ((boxNumID(1).innerText == "X") && (boxNumID(2).innerText == "X") && (boxNumID(6).innerText == "X")) {
							boxNumID(7).innerText = "O";
							checkAll();
		}	else if ((boxNumID(1).innerText == "X") && (boxNumID(3).innerText == "X") && (boxNumID(8).innerText == "")) {
							boxNumID(8).innerText = "O";
							checkAll();
		}	else if( (boxNumID(1).innerText == "X") && (boxNumID(7).innerText == "X") && (boxNumID(4).innerText == "") ){
							boxNumID(4).innerText = "O";
							checkAll();
		} 
	} else if (turnNumber == 8) {

	} else if (turnNumber == 9) {
		if (document.move == "O") {
			for (var testing23 = 1; testing23 <= 9; testing23++) {
				if (boxNumID(testing23).innerText == "") {
					boxNumID(testing23).innerText = "O";
				}				
			}
		}
	}
	
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

function endMove(num) {
	return document.getElementById("box" + num);
}

function drawGame() {
	if (moveCheck(1) != "" && moveCheck(2) != "" && moveCheck(3) != "" && moveCheck(4) != "" && moveCheck(5) != "" && moveCheck(6) != "" && moveCheck(7) != "" && moveCheck(8) != "" && moveCheck(9) != "") {
		alert("draw!!!")
		location.reload();
	}
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

