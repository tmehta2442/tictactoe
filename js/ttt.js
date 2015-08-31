window.onload = function start() {
	letsPlay();
	mouseClicked();
}

function boxNumID(num) {
	return document.getElementById("box" + num)
}

function letsPlay() {
	document.winner = null;
	//if (Math.random() < 0.5) {
	if (true) {
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

var moveHold = null;
function holdThis () {
	if ( document.move == "X") {
		moveHold = "X";
	} else {
		moveHold = "O";
	}
	return moveHold;
}

function topCorners() 		 {if( (boxNumID(1).innerText == moveHold) && (boxNumID(3).innerText == moveHold)) {topCornersX 			= true; return topCornersX;}}
function bottomCorners() 	 {if( (boxNumID(7).innerText == moveHold) && (boxNumID(9).innerText == moveHold)) {bottomCornersX 	= true; return bottomCornersX;}}
function firstColCorners() {if( (boxNumID(1).innerText == moveHold) && (boxNumID(7).innerText == moveHold)) {firstColCornersX = true;	return firstColCornersX;}}
function thirdColCorners() {if( (boxNumID(3).innerText == moveHold) && (boxNumID(9).innerText == moveHold)) {thirdColCornersX = true;	return thirdColCornersX;}}
function rowCheck1a() 		 {if( (boxNumID(1).innerText == moveHold) && (boxNumID(2).innerText == moveHold)) {row1a 						= true;	return row1a;}}
function rowCheck1b() 		 {if( (boxNumID(2).innerText == moveHold) && (boxNumID(3).innerText == moveHold)) {row1a 						= true;	return row1b;}}
function rowCheck2a() 		 {if( (boxNumID(4).innerText == moveHold) && (boxNumID(5).innerText == moveHold)) {row2a 						= true; return row2a;}}
function rowCheck2b() 		 {if( (boxNumID(5).innerText == moveHold) && (boxNumID(6).innerText == moveHold)) {row2a 						= true;	return row2a;}}
function rowCheck3a() 		 {if( (boxNumID(7).innerText == moveHold) && (boxNumID(8).innerText == moveHold)) {row2a 						= true;	return row2a;}}
function rowCheck3b() 		 {if( (boxNumID(8).innerText == moveHold) && (boxNumID(9).innerText == moveHold)) {row2a 						= true;	return row2a;}}
function colCheck1a() 		 {if( (boxNumID(1).innerText == moveHold) && (boxNumID(4).innerText == moveHold)) {row2a 						= true;	return row2a;}}
function colCheck1b() 		 {if( (boxNumID(4).innerText == moveHold) && (boxNumID(7).innerText == moveHold)) {row2a 						= true; return row2a;}}
function colCheck2a() 		 {if( (boxNumID(2).innerText == moveHold) && (boxNumID(5).innerText == moveHold)) {col2a 						= true;	return col2a;}}
function colCheck2b() 		 {if( (boxNumID(5).innerText == moveHold) && (boxNumID(8).innerText == moveHold)) {col2b 						= true;	return col2b;}}
function colCheck3a() 		 {if( (boxNumID(3).innerText == moveHold) && (boxNumID(6).innerText == moveHold)) {col3a 						= true;	return col3a;}}
function colCheck3b() 		 {if( (boxNumID(6).innerText == moveHold) && (boxNumID(9).innerText == moveHold)) {col3b 						= true;	return col3b;}}
function diaCheck1() 			 {if( (boxNumID(1).innerText == moveHold) && (boxNumID(5).innerText == moveHold)) {dia1 						= true;	return dia1;}}
function diaCheck2() 			 {if( (boxNumID(3).innerText == moveHold) && (boxNumID(5).innerText == moveHold)) {dia2 						= true;	return dia2;}}
function diaCheck3() 			 {if( (boxNumID(7).innerText == moveHold) && (boxNumID(5).innerText == moveHold)) {dia3 						= true;	return dia3;}}
function diaCheck4() 			 {if( (boxNumID(9).innerText == moveHold) && (boxNumID(5).innerText == moveHold)) {dia4 						= true;	return dia4;}}

function knightCheck1() 	 {if( (boxNumID(1).innerText == moveHold) && (boxNumID(8).innerText == moveHold)) {horse1 						= true;	return horse1;}}
function knightCheck2() 	 {if( (boxNumID(1).innerText == moveHold) && (boxNumID(6).innerText == moveHold)) {horse2 						= true;	return horse2;}}
function knightCheck3() 	 {if( (boxNumID(2).innerText == moveHold) && (boxNumID(7).innerText == moveHold)) {horse3 						= true;	return horse3;}}
function knightCheck4() 	 {if( (boxNumID(2).innerText == moveHold) && (boxNumID(9).innerText == moveHold)) {horse4 						= true;	return horse4;}}
function knightCheck5() 	 {if( (boxNumID(3).innerText == moveHold) && (boxNumID(4).innerText == moveHold)) {horse5 						= true;	return horse5;}}
function knightCheck6() 	 {if( (boxNumID(3).innerText == moveHold) && (boxNumID(8).innerText == moveHold)) {horse6 						= true;	return horse6;}}
function knightCheck7() 	 {if( (boxNumID(4).innerText == moveHold) && (boxNumID(9).innerText == moveHold)) {horse7 						= true;	return horse7;}}
function knightCheck8() 	 {if( (boxNumID(6).innerText == moveHold) && (boxNumID(7).innerText == moveHold)) {horse8 						= true;	return horse8;}}

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
		} else if ( colCheck2a() && (boxNumID(8).innerText == "")) {
								boxNumID(8).innerText = "O";
		} else if ( colCheck2b() && (boxNumID(2).innerText == "")) {
								boxNumID(2).innerText = "O";
		} else if ( rowCheck2a && (boxNumID(6).innerText == "")) {
								boxNumID(6).innerText = "O";
		} else if ( rowCheck3b && (boxNumID(4).innerText == "")) {
								boxNumID(4).innerText = "O";
		}
			
	} else if (turnNumber == 5) {
		if 			 ( 	boxNumID(1).innerText == "") {
								boxNumID(1).innerText = "O"
		} else if( 	knightCheck2() && (boxNumID(7).innerText == "")) {
								boxNumID(7).innerText = "O";
		} else if(  knightCheck1() && (boxNumID(3).innerText == "")) {
								boxNumID(3).innerText = "O";
		} else if(	knightCheck4() && (boxNumID(4).innerText == "")) {
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
		} else if (knightCheck2() && (boxNumID(7).innerText == "X") && (boxNumID(3).innerText == "")){
								boxNumID(3).innerText = "O";
		}	else if ((boxNumID(1).innerText == "O") && (boxNumID(4).innerText == "O") && (boxNumID(7).innerText == "")){
								boxNumID(7).innerText = "O";
		}	else if (knightCheck1() && knightCheck6() && (boxNumID(7).innerText == "")){
								boxNumID(7).innerText = "O";
		} else if ((boxNumID(2).innerText == "O") && (boxNumID(5).innerText == "O") && (boxNumID(8).innerText == "")){
								boxNumID(8).innerText = "O";
		}
		checkAll();

	} else if (turnNumber == 8) {

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

