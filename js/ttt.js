window.onload = function start() {
	letsPlay();
	mouseClicked();
}

function boxNumID(num) {
	return document.getElementById("box" + num)
}

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

function whoIsAi(){
	if (document.move == "X"){
		turn();
		setMessage(document.move + "'s move whoisAI");
	} else {
		aiTurn();
		setMessage(document.move + "'s move whoisAI");
	}
}

function aiMessage(msg) {
	document.getElementById("aimsg").innerText = msg;
}
function setMessage(msg) {
	document.getElementById("msg").innerText = msg;
}

function turn() {
	
	boxNumID(1).onclick = function() {if( (boxNumID(1).innerText) == ""){(this).innerText = document.move; withinTurn();} else {alert("already played");}}
	boxNumID(2).onclick = function() {if( (boxNumID(2).innerText) == ""){(this).innerText = document.move; withinTurn();} else {alert("already played");}} 
	boxNumID(3).onclick = function() {if( (boxNumID(3).innerText) == ""){(this).innerText = document.move; withinTurn();} else {alert("already played");}} 
	boxNumID(4).onclick = function() {if( (boxNumID(4).innerText) == ""){(this).innerText = document.move; withinTurn();} else {alert("already played");}} 
	boxNumID(5).onclick = function() {if( (boxNumID(5).innerText) == ""){(this).innerText = document.move; withinTurn();} else {alert("already played");}} 
	boxNumID(6).onclick = function() {if( (boxNumID(6).innerText) == ""){(this).innerText = document.move; withinTurn();} else {alert("already played");}} 
	boxNumID(7).onclick = function() {if( (boxNumID(7).innerText) == ""){(this).innerText = document.move; withinTurn();} else {alert("already played");}} 
	boxNumID(8).onclick = function() {if( (boxNumID(8).innerText) == ""){(this).innerText = document.move; withinTurn();} else {alert("already played");}} 
	boxNumID(9).onclick = function() {if( (boxNumID(9).innerText) == ""){(this).innerText = document.move; withinTurn();} else {alert("already played");}}
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

var moveHold = null;
function holdThis () {
	if ( document.move == "X") {
		moveHold = "X";
	} else {
		moveHold = "O";
	}
	return moveHold;
}

function topCorners() 		 { if( (boxNumID(1).innerText == moveHold) && (boxNumID(3).innerText == moveHold)) {topcornersX 			= true; return topcornersX; return true;} else { return false; }}
function bottomCorners() 	 { if( (boxNumID(7).innerText == moveHold) && (boxNumID(9).innerText == moveHold)) {bottomcornersX 		= true; return bottomcornersX; return true;} else { return false; }}
function firstColCorners() { if( (boxNumID(1).innerText == moveHold) && (boxNumID(7).innerText == moveHold)) {firstcolcornersX 	= true;	return firstcolcornersX; return true;} else { return false; }}
function thirdColCorners() { if( (boxNumID(3).innerText == moveHold) && (boxNumID(9).innerText == moveHold)) {thirdcolcornersX 	= true;	return thirdcolcornersX; return true;} else { return false; }}
function midCol() 		 		 { if( (boxNumID(2).innerText == moveHold) && (boxNumID(8).innerText == moveHold)) {midcolX						= true;	return midcolX; return true;} else { return false; }}
function midRow() 		 		 { if( (boxNumID(4).innerText == moveHold) && (boxNumID(6).innerText == moveHold)) {midrowX						= true;	return midrowX; return true;} else { return false; }}
function rowCheck1a() 		 { if( (boxNumID(1).innerText == moveHold) && (boxNumID(2).innerText == moveHold)) {row1a 						= true;	return row1a; return true;} else { return false; }}
function rowCheck1b() 		 { if( (boxNumID(2).innerText == moveHold) && (boxNumID(3).innerText == moveHold)) {row1b 						= true;	return row1b; return true;} else { return false; }}
function rowCheck2a() 		 { if( (boxNumID(4).innerText == moveHold) && (boxNumID(5).innerText == moveHold)) {row2a 						= true; return row2a; return true;} else { return false; }}
function rowCheck2b() 		 { if( (boxNumID(5).innerText == moveHold) && (boxNumID(6).innerText == moveHold)) {row2b 						= true;	return row2b; return true;} else { return false; }}
function rowCheck3a() 		 { if( (boxNumID(7).innerText == moveHold) && (boxNumID(8).innerText == moveHold)) {row3a 						= true;	return row3a; return true;} else { return false; }}
function rowCheck3b() 		 { if( (boxNumID(8).innerText == moveHold) && (boxNumID(9).innerText == moveHold)) {row3b 						= true;	return row3b; return true;} else { return false; }}
function colCheck1a() 		 { if( (boxNumID(1).innerText == moveHold) && (boxNumID(4).innerText == moveHold)) {col1a 						= true;	return col1a; return true;} else { return false; }}
function colCheck1b() 		 { if( (boxNumID(4).innerText == moveHold) && (boxNumID(7).innerText == moveHold)) {col1b 						= true; return col1b; return true;} else { return false; }}
function colCheck2a() 		 { if( (boxNumID(2).innerText == moveHold) && (boxNumID(5).innerText == moveHold)) {col2a 						= true;	return col2a; return true;} else { return false; }}
function colCheck2b() 		 { if( (boxNumID(5).innerText == moveHold) && (boxNumID(8).innerText == moveHold)) {col2b 						= true;	return col2b; return true;} else { return false; }}
function colCheck3a() 		 { if( (boxNumID(3).innerText == moveHold) && (boxNumID(6).innerText == moveHold)) {col3a 						= true;	return col3a; return true;} else { return false; }}
function colCheck3b() 		 { if( (boxNumID(6).innerText == moveHold) && (boxNumID(9).innerText == moveHold)) {col3b 						= true;	return col3b; return true;} else { return false; }}
function smDiaCheck1() 		 { if( (boxNumID(2).innerText == moveHold) && (boxNumID(4).innerText == moveHold)) {smdia1 						= true;	return smdia1; return true;} else { return false; }}
function smDiaCheck2() 		 { if( (boxNumID(2).innerText == moveHold) && (boxNumID(6).innerText == moveHold)) {smdia2 						= true;	return smdia2; return true;} else { return false; }}
function smDiaCheck3() 		 { if( (boxNumID(4).innerText == moveHold) && (boxNumID(8).innerText == moveHold)) {smdia3 						= true;	return smdia3; return true;} else { return false; }}
function smDiaCheck4() 		 { if( (boxNumID(6).innerText == moveHold) && (boxNumID(8).innerText == moveHold)) {smdia4 						= true;	return smdia4; return true;} else { return false; }}
function diaCheck1() 			 { if( (boxNumID(1).innerText == moveHold) && (boxNumID(5).innerText == moveHold)) {dia1 							= true;	return dia1; return true;} else { return false; }}
function diaCheck2() 			 { if( (boxNumID(3).innerText == moveHold) && (boxNumID(5).innerText == moveHold)) {dia2 							= true;	return dia2; return true;} else { return false; }}
function diaCheck3() 			 { if( (boxNumID(7).innerText == moveHold) && (boxNumID(5).innerText == moveHold)) {dia3 							= true;	return dia3; return true;} else { return false; }}
function diaCheck4() 			 { if( (boxNumID(9).innerText == moveHold) && (boxNumID(5).innerText == moveHold)) {dia4 							= true;	return dia4; return true;} else { return false; }}
function diaEndCheck1() 	 { if( (boxNumID(1).innerText == moveHold) && (boxNumID(9).innerText == moveHold)) {diaend1 					= true;	return diaend1; return true;} else { return false; }}
function diaEndCheck2() 	 { if( (boxNumID(3).innerText == moveHold) && (boxNumID(7).innerText == moveHold)) {diaend2 					= true;	return diaend2; return true;} else { return false; }}
function knight1() 	 			 { if( (boxNumID(1).innerText == moveHold) && (boxNumID(8).innerText == moveHold)) {horse1 						= true;	return horse1; return true;} else { return false; }}
function knight2() 	 			 { if( (boxNumID(1).innerText == moveHold) && (boxNumID(6).innerText == moveHold)) {horse2 						= true;	return horse2; return true;} else { return false; }}
function knight3() 	 			 { if( (boxNumID(2).innerText == moveHold) && (boxNumID(7).innerText == moveHold)) {horse3 						= true;	return horse3; return true;} else { return false; }}
function knight4() 	 			 { if( (boxNumID(2).innerText == moveHold) && (boxNumID(9).innerText == moveHold)) {horse4 						= true;	return horse4; return true;} else { return false; }}
function knight5() 	 			 { if( (boxNumID(3).innerText == moveHold) && (boxNumID(4).innerText == moveHold)) {horse5 						= true;	return horse5; return true;} else { return false; }}
function knight6() 	 			 { if( (boxNumID(3).innerText == moveHold) && (boxNumID(8).innerText == moveHold)) {horse6 						= true;	return horse6; return true;} else { return false; }}
function knight7() 	 			 { if( (boxNumID(6).innerText == moveHold) && (boxNumID(7).innerText == moveHold)) {horse7 						= true;	return horse7; return true;} else { return false; }}
function knight8() 	 			 { if( (boxNumID(4).innerText == moveHold) && (boxNumID(9).innerText == moveHold)) {horse8 						= true;	return horse8; return true;} else { return false; }}

function anyCheck() {
	if 			(topCorners() 			&& (boxNumID(2).innerText == "")) {(boxNumID(2).innerText = "O");}
	else if (bottomCorners() 		&& (boxNumID(8).innerText == "")) {(boxNumID(8).innerText = "O");}
	else if (firstColCorners() 	&& (boxNumID(4).innerText == "")) {(boxNumID(4).innerText = "O");}
	else if (thirdColCorners() 	&& (boxNumID(6).innerText == "")) {(boxNumID(6).innerText = "O");}
	else if (rowCheck1a() 			&& (boxNumID(3).innerText == "")) {(boxNumID(3).innerText = "O");}
	else if (rowCheck1b() 			&& (boxNumID(1).innerText == "")) {(boxNumID(1).innerText = "O");}
	else if (rowCheck2a() 			&& (boxNumID(6).innerText == "")) {(boxNumID(6).innerText = "O");}
	else if (rowCheck2b() 			&& (diaCheck1() != true)&& (boxNumID(3).innerText == "")) {(boxNumID(3).innerText = "Osdfsdf");}
	else if (rowCheck3a() 			&& (boxNumID(9).innerText == "")) {(boxNumID(9).innerText = "O");}
	else if (rowCheck3b() 			&& (boxNumID(7).innerText == "")) {(boxNumID(7).innerText = "O");}
	else if (colCheck1a() 			&& (boxNumID(7).innerText == "")) {(boxNumID(7).innerText = "O");}
	else if (colCheck1b() 			&& (boxNumID(1).innerText == "")) {(boxNumID(1).innerText = "O");}
	else if (colCheck2a() 			&& (boxNumID(8).innerText == "")) {(boxNumID(8).innerText = "O");}
	else if (colCheck2b() 			&& (boxNumID(2).innerText == "")) {(boxNumID(2).innerText = "O");}
	else if (colCheck3a() 			&& (boxNumID(9).innerText == "")) {(boxNumID(9).innerText = "O");}
	else if (colCheck3b() 			&& (boxNumID(3).innerText == "")) {(boxNumID(3).innerText = "O");}
  else if (diaCheck1() 				&& (boxNumID(9).innerText == "")) {(boxNumID(9).innerText = "O");}
  else if (diaCheck2() 				&& (boxNumID(7).innerText == "")) {(boxNumID(7).innerText = "O");}
  else if (diaCheck3() 				&& (boxNumID(3).innerText == "")) {(boxNumID(3).innerText = "O");}
  else if (diaCheck4() 				&& (boxNumID(1).innerText == "")) {(boxNumID(1).innerText = "O");}



	else if (turnNumber == 8) {
		if 			(knight1() && (boxNumID(4).innerText == "")) {(boxNumID(4).innerText = "O");}
		else if (knight1() && (boxNumID(6).innerText == "")) {(boxNumID(6).innerText = "O");}
		else if (knight2() && (boxNumID(2).innerText == "")) {(boxNumID(2).innerText = "O");}
		else if (knight2() && (boxNumID(7).innerText == "")) {(boxNumID(7).innerText = "O");}
		else if (knight3() && (boxNumID(4).innerText == "")) {(boxNumID(4).innerText = "O");}
		else if (knight3() && (boxNumID(6).innerText == "")) {(boxNumID(6).innerText = "O");}
		else if (knight4() && (boxNumID(4).innerText == "")) {(boxNumID(4).innerText = "O");}
		else if (knight4() && (boxNumID(6).innerText == "")) {(boxNumID(6).innerText = "O");}
		else if (knight5() && (boxNumID(2).innerText == "")) {(boxNumID(2).innerText = "O");}
		else if (knight5() && (boxNumID(8).innerText == "")) {(boxNumID(8).innerText = "O");}
		else if (knight6() && (boxNumID(4).innerText == "")) {(boxNumID(4).innerText = "O");}
		else if (knight6() && (boxNumID(6).innerText == "")) {(boxNumID(6).innerText = "O");}
		else if (knight7() && (boxNumID(2).innerText == "")) {(boxNumID(2).innerText = "O");}
		else if (knight7() && (boxNumID(8).innerText == "")) {(boxNumID(8).innerText = "O");}
		else if (knight8() && (boxNumID(2).innerText == "")) {(boxNumID(2).innerText = "O");}
		else if (knight8() && (boxNumID(8).innerText == "")) {(boxNumID(8).innerText = "O");}
	}
}
var box1A
function aiTurn() {
	document.move = "O";
	
	if (turnNumber == 0) {
								boxNumID(5).innerText = "O";
								checkAll();
	
	} else if 	((turnNumber == 1) && (boxNumID(5).innerText == "")) {
								boxNumID(5).innerText = "O";
								checkAll();
	} else if 	( turnNumber == 2) {
		if 				( boxNumID(5).innerText == "") {
								boxNumID(5).innerText = "O";						
		} if 			( boxNumID(5).innerText == "X") {
								boxNumID(7).innerText = "O";
		}
		checkAll();
	} else if 	 (turnNumber == 3) {
		if 				 (boxNumID(9).innerText == "") {
							 	boxNumID(9).innerText = "O";					
		} else if  (boxNumID(1).innerText == "") {
								boxNumID(1).innerText = "O";			
		}
		checkAll();
	} else if (turnNumber == 4) {
		if 				( diaCheck1() && (boxNumID(9).innerText == "")) {
								boxNumID(9).innerText = "O";
		} else if ( (diaCheck2() || diaCheck4()) && (boxNumID(1).innerText == "")) {
								boxNumID(1).innerText = "O";
		} else if ( (diaEndCheck1() || diaEndCheck2() ) && (boxNumID(4).innerText == "")) {
								boxNumID(4).innerText = "O"
		} else if ((smDiaCheck1() || smDiaCheck4()) && (boxNumID(7).innerText == "")) {
								boxNumID(7).innerText = "O"
		}	else if ((smDiaCheck3() || smDiaCheck2()) && (boxNumID(7).innerText == "")) {
								boxNumID(7).innerText = "O"
		} else if ( colCheck1a() && (boxNumID(7).innerText == "")) {
								boxNumID(7).innerText = "O";
		} else if ( colCheck2a() && (boxNumID(8).innerText == "")) {
								boxNumID(8).innerText = "O";
		} else if ( colCheck2b() && (boxNumID(2).innerText == "")) {
								boxNumID(2).innerText = "O";
		} else if ( colCheck3a() && (boxNumID(9).innerText == "")) {
								boxNumID(9).innerText = "O";
		} else if ( rowCheck1a() && (boxNumID(3).innerText == "")) {
								boxNumID(3).innerText = "O";
		} else if ( rowCheck2a() && (boxNumID(6).innerText == "")) {
								boxNumID(6).innerText = "O";
		} else if ( rowCheck2b() && (boxNumID(4).innerText == "")) {
								boxNumID(4).innerText = "O";
		}	else if ( rowCheck3b() && (boxNumID(4).innerText == "")) {
								boxNumID(4).innerText = "O";
		}	else if ( firstColCorners() && (boxNumID(4).innerText == "")) {
								boxNumID(4).innerText = "O";
		}	else if ( thirdColCorners() && (boxNumID(6).innerText == "")) {
								boxNumID(6).innerText = "O";
		} else if ( topCorners() && (boxNumID(2).innerText == "")) {
								boxNumID(2).innerText = "O";
		} else if ( midCol() && (boxNumID(7).innerText == "")) {
								boxNumID(7).innerText = "O";
		} else if ( midRow() && (boxNumID(2).innerText == "")) {
								boxNumID(2).innerText = "O";
		} else if ( knight1() && (boxNumID(4).innerText == "")) {
								boxNumID(4).innerText = "O";
		} else if ((knight2() || knight8() )&& (boxNumID(2).innerText == "")) {
								boxNumID(2).innerText = "O";
		} else if ((knight3() || knight5()) && (boxNumID(1).innerText == "")) {
								boxNumID(1).innerText = "O";
		} else if((knight6() || knight7()) && (boxNumID(9).innerText == "")) {
								boxNumID(9).innerText = "O";
		} else if ( knight4() && (boxNumID(3).innerText == "")) {
								boxNumID(3).innerText = "O";
		}
		checkAll();		
	} else if (turnNumber == 5) {
		if 			 ( 	boxNumID(1).innerText == "") {
								boxNumID(1).innerText = "O"
		} else if( 	knight2() && (boxNumID(7).innerText == "")) {
								boxNumID(7).innerText = "O";
		} else if(  knight1() && (boxNumID(3).innerText == "")) {
								boxNumID(3).innerText = "O";
		} else if(	knight4() && (boxNumID(4).innerText == "")) {
								boxNumID(4).innerText = "O";
		} else if(	topCorners() 			&& 	(boxNumID(2).innerText == "")) {
								boxNumID(2).innerText = "O";
		} else if(	topCorners() 			&& 	(boxNumID(2).innerText == "")) {
								boxNumID(2).innerText = "O";
		} else if(	firstColCorners() && 	(boxNumID(4).innerText == "")) {
								boxNumID(4).innerText = "O"
		} else if(  thirdColCorners()  && (boxNumID(6).innerText == "")){
								boxNumID(6).innerText = "O";
		} else if(	bottomCorners() 	&&	(boxNumID(8).innerText == "")) {
								boxNumID(8).innerText = "O"
		} else if(	rowCheck1a() 			&& 	(boxNumID(3).innerText == "")) {
								boxNumID(3).innerText = "O";
		} else if(	rowCheck3b() 			&& 	(boxNumID(7).innerText == "")) {
								boxNumID(7).innerText = "O";
		}	else if(	colCheck1a() 			&& 	(boxNumID(7).innerText == "")) {
								boxNumID(7).innerText = "O";
		}	else if(	colCheck3b()			&& (boxNumID(3).innerText == "")) {
								boxNumID(3).innerText = "O";				
		}	
		checkAll();
	} else if (turnNumber == 6) {
		anyCheck();
		if (win == false) {

		}
		checkAll();
		
	} else if (turnNumber == 7) {
		if 				((boxNumID(3).innerText == "O") && (boxNumID(7).innerText == "")) {
								boxNumID(7).innerText = "O";
		} else if ((boxNumID(1).innerText == "O") && (boxNumID(3).innerText == "O") && (boxNumID(2).innerText == "")) {
								boxNumID(2).innerText = "O";
		} else if ((boxNumID(1).innerText == "O") && (boxNumID(6).innerText == "O") && (boxNumID(7).innerText == "")) {
								boxNumID(7).innerText = "O";
		} else if ((boxNumID(4).innerText == "") && (boxNumID(8).innerText != "O") && (boxNumID(9).innerText != "O")) {
								boxNumID(4).innerText = "O";
		} else if ((boxNumID(8).innerText == "O") && (boxNumID(9).innerText == "O") && (boxNumID(7).innerText == "")){
								boxNumID(7).innerText = "O";
		} else if ((boxNumID(3).innerText == "O") && (boxNumID(9).innerText == "O") && (boxNumID(6).innerText == "")){
								boxNumID(6).innerText = "O";
		} else if ((boxNumID(4).innerText == "O") && (boxNumID(5).innerText == "O") && (boxNumID(6).innerText == "")){
								boxNumID(6).innerText = "O";
		} else if ((boxNumID(5).innerText == "O") && (boxNumID(7).innerText == "O") && (boxNumID(3).innerText == "")){
								boxNumID(3).innerText = "O";
		} else if ((boxNumID(7).innerText == "O") && (boxNumID(9).innerText == "O") && (boxNumID(8).innerText == "")){
								boxNumID(8).innerText = "O";
		} else if (knight2() && (boxNumID(7).innerText == "X") && (boxNumID(3).innerText == "")){
								boxNumID(3).innerText = "O";
		}	else if ((boxNumID(1).innerText == "O") && (boxNumID(4).innerText == "O") && (boxNumID(7).innerText == "")){
								boxNumID(7).innerText = "O";
		}	else if (knight1() && knight6() && (boxNumID(7).innerText == "")){
								boxNumID(7).innerText = "O";
		} else if ((boxNumID(2).innerText == "O") && (boxNumID(5).innerText == "O") && (boxNumID(8).innerText == "")){
								boxNumID(8).innerText = "O";
		}
		checkAll();

	} else if (turnNumber == 8) {
		anyCheck();
		if (win == false) {

		}
		checkAll();
	} else if (turnNumber == 9) {
		if (document.move == "O") {
			for (var testing23 = 1; testing23 <= 9; testing23++) {
				if (boxNumID(testing23).innerText == "") {
					boxNumID(testing23).innerText = "O";
					checkAll();
				}				
			}
		}
	}
	
	turn();		
}

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

var win = false;
function winCheck(a, b, c, turn) {
	
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
		if (win != true) {
			alert("draw!!!")
		}
		location.reload();
	}
}

