window.onload = function start() {
	letsPlay();
}

function boxNum(num) {
	return document.getElementById("box" + num)
}

function letsPlay() {
	document.winner = null;
	if (Math.random() < 0.5) {
		document.move = "O";
		//aiTurn();
		aiMessage(document.move + "'s move whoisAI ELSE");
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

function turn() {

		boxNum(1).onclick = function() {if( (boxNum(1).innerText) == ""){(this).innerText = document.move; winnerUser(); aiTurn(); drawGame();} else {alert("already played");}}
		boxNum(2).onclick = function() {if( (boxNum(2).innerText) == ""){(this).innerText = document.move; winnerUser(); aiTurn(); drawGame();} else {alert("already played");}} 
		boxNum(3).onclick = function() {if( (boxNum(3).innerText) == ""){(this).innerText = document.move; winnerUser(); aiTurn(); drawGame();} else {alert("already played");}} 
		boxNum(4).onclick = function() {if( (boxNum(4).innerText) == ""){(this).innerText = document.move; winnerUser(); aiTurn(); drawGame();} else {alert("already played");}} 
		boxNum(5).onclick = function() {if( (boxNum(5).innerText) == ""){(this).innerText = document.move; winnerUser(); aiTurn(); drawGame();} else {alert("already played");}} 
		boxNum(6).onclick = function() {if( (boxNum(6).innerText) == ""){(this).innerText = document.move; winnerUser(); aiTurn(); drawGame();} else {alert("already played");}} 
		boxNum(7).onclick = function() {if( (boxNum(7).innerText) == ""){(this).innerText = document.move; winnerUser(); aiTurn(); drawGame();} else {alert("already played");}} 
		boxNum(8).onclick = function() {if( (boxNum(8).innerText) == ""){(this).innerText = document.move; winnerUser(); aiTurn(); drawGame();} else {alert("already played");}} 
		boxNum(9).onclick = function() {if( (boxNum(9).innerText) == ""){(this).innerText = document.move; winnerUser(); aiTurn(); drawGame();} else {alert("already played");}}


}

function changeTurn() {

}

function aiTurn() {
	document.move = "O";
	num2 = Math.floor(Math.random()*(9)+1);
	console.log(num2);

	if 				( ( boxNum(5).innerText != "O") && (boxNum(5).innerText != "X")) {
								boxNum(5).innerText = "O";
								setMessage(document.move + "'s move ai turn 5");
								winnerUser();
								document.move = "X";
	} else if ( ( boxNum(9).innerText != "O") && (boxNum(9).innerText != "X")) {
								boxNum(9).innerText = "O";
								setMessage(document.move + "'s move ai turn 9");
								winnerUser();
								document.move = "X";
	} else if ( ( boxNum(3).innerText != "O") && (boxNum(3).innerText != "X")) {
								boxNum(3).innerText = "O";
								setMessage(document.move + "'s move ai turn 3");
								winnerUser();
								document.move = "X";
	} else if ( ( boxNum(4).innerText != "O") && (boxNum(4).innerText != "X")) {
								boxNum(4).innerText = "O";
								setMessage(document.move + "'s move ai turn 4");
								winnerUser();
								document.move = "X";
	} else if ( ( boxNum(6).innerText != "O") && (boxNum(6).innerText != "X")) {
								boxNum(6).innerText = "O";
								setMessage(document.move + "'s move ai turn 6");
								winnerUser();
								document.move = "X";
	}
	// if 				(	document.getElementById("box7").innerText != ("O" || "X")) {
	// 						document.getElementById("box7").innerText = "O";
	// 						setMessage(document.move + "'s move ai turn 7");
	// 						winnerUser();
	// 						document.move = "X";
	// } else if (	document.getElementById("box8").innerText != ("O" || "X")) {
	// 						document.getElementById("box8").innerText = "O";
	// 						setMessage(document.move + "'s move 8");
	// 						winnerUser();
	// 						document.move = "X";
	// } else if (	(document.getElementById("box9").innerText != "O") && (document.getElementById("box9").innerText != "X")) {
	// 						document.getElementById("box9").innerText = "O";
	// 						setMessage(document.move + "'s move 9");
	// 						winnerUser();
	// 						document.move = "X";
	// } else if (	document.getElementById("box5").innerText != ("O" || "X")) {
	// 						document.getElementById("box5").innerText = "O";
	// 						setMessage(document.move + "'s move 5");
	// 						winnerUser();
	// 						document.move = "X";
	// } else if (	document.getElementById("box6").innerText != ("O" || "X")) {
	// 						document.getElementById("box6").innerText = "O";
	// 						setMessage(document.move + "'s move 6");
	// 						winnerUser();
	// 						document.move = "X";
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


