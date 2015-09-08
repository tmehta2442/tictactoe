var moveHold = null;
var turnNumber = 0;
var numO = 0
var countDown = 4;

//counter for turns
function revTurn() {
	turnNumber++;
}

//determines who goes first
//a simple random is put in to see who goes first
//if less than 0.5 then AI goes first
//	--at that point aiTurn is spun up and we're off to the races!
//if more than 0.5 turn is spun up which is what will capture the user's move
function letsPlay() {
	document.winner = null;
	if (Math.random() < 0.5) {
		document.move = "O";
		aiTurn();
	} else {
		document.move = "X"
		setMessage("You go first as X");
		turn();
	}

}

//created this so I can just type boxNumID(*) rather than the entire contents of the function. Works ver nicely!
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

//calling this sets the div with id "msg" to the message that it is asked to
function setMessage(msg) {
	document.getElementById("msg").innerText = msg;
}

function setAltLink(link, msg) {
	document.getElementById("altlink").href = link;
	document.getElementById("altlink").innerText = msg;
}

//check for a winner, update who is playing and incremement mouse click
function checkAll() {
	winnerUser();
	document.move = "X";
	if (!win){
		setMessage("Your move");
	}
	revTurn();
}

//checking if game is a draw, counter for turn increased, container for "holdThis" modified for AI logic, then the aiturn is run
function withinTurn() {
	revTurn();
	holdThis();
	aiTurn();
	drawGame();
}


//determins the number of "O's" on the board
function countO() {
	numO = 0;
	for (var i = 1; i <= 9; i++) {
		if (boxNumID(i).innerText == "O") {
			numO++
		}
	}
}

//timer delay- resued in win notes
function winNote(one, two, three){
	var timeoutID;
	delayedAlert();
	revCount();
	function delayedAlert() {
	  timeoutID = window.setTimeout(slowAlert, 4000);
	  setMessage(one);
	  setAltLink(two, three);
	}
	function slowAlert() {
	  location.reload()
	}
	function clearAlert() {
	  window.clearTimeout(timeoutID);
	}

}

// countDown
function revCount(){
	if((countDown - 1) >= 0){
		countDown = countDown - 1;
		numCount.innerText = '... new game in: ' + countDown;
		setTimeout('revCount()',1000);
		}
}