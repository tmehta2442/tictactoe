var win = false;

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

//three in a row wins... based on threeInARow!!
function winCheck(a, b, c, turn) {
	if (moveCheck(a) == turn && moveCheck(b) == turn && moveCheck(c) == turn) {
		win = true;
	}
	return win;
}

//should only be run if all tiles are taken
function drawGame() {
	if (moveCheck(1) != "" && moveCheck(2) != "" && moveCheck(3) != "" && moveCheck(4) != "" && moveCheck(5) != "" && moveCheck(6) != "" && moveCheck(7) != "" && moveCheck(8) != "" && moveCheck(9) != "") {
		if (win != true) {
			alert("draw!!!")
		}
		location.reload();
	}
}

// function that will return to us the innerText value for specified box. This is used in conjunction w/ threeInARow
function moveCheck(num) {
	return document.getElementById("box" + num).innerText;
}




