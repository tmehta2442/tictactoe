var win = false;

//computer win note... and if, somehow, the user wins.
//Oh, and if you have read this deeply I highly reccommend going to the link for alarm "1202"...
//and take whatever time you may have to read up on the Apollo missions Quite possibly the
//most fun and uplifting story on my mind right now

function winnerUser() {
	if (threeInARow(document.move)) {
		document.winner = document.move;

		if (document.move == "O") {
			winNote(("Computer wins. How about a nice game of"), ("https://www.youtube.com/watch?v=s93KC4AGKnY&feature=youtu.be&t=40s"), ("GLOBAL THERMONUCLEAR WAR?"));
		} else {
			winNote(("ALARM 1202:"), ("http://www.airspacemag.com/daily-planet/troubleshooting-101-1201-actually-and-1202-too-111339271/?no-ist"), 
			("you should not have been able to win."));
		}
	}
}

//Checks for a win
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

//should only be run if all tiles are taken & draw note
function drawGame() {
	if (moveCheck(1) != "" && moveCheck(2) != "" && moveCheck(3) != "" && moveCheck(4) != "" && moveCheck(5) != "" && moveCheck(6) != "" && moveCheck(7) != "" && moveCheck(8) != "" && moveCheck(9) != "") {
		if (win != true) {
			winNote(("Draw! Let us play again"), (""), (""));
		}
	}
}

// function that will return to us the innerText value for specified box. This is used in conjunction w/ threeInARow
function moveCheck(num) {
	return document.getElementById("box" + num).innerText;
}




