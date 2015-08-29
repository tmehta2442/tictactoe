window.onload = function start() {
	letsPlay();
}

function letsPlay() {
	document.move = "X";
	if (Math.random() < 0.5) {
		document.move = "O";
	}
	document.winner = null;
	setMessage(document.move + "'s move");
	turn();
}


function setMessage(msg) {
	document.getElementById("msg").innerText = msg;
}

function turn() {
	document.getElementById("box1").onclick = function() {if( (document.getElementById("box1").innerText) == ""){(this).innerText = document.move; currentUser();} else {alert("already played");}}
	document.getElementById("box2").onclick = function() {if( (document.getElementById("box2").innerText) == ""){(this).innerText = document.move; currentUser();} else {alert("already played");}} 
	document.getElementById("box3").onclick = function() {if( (document.getElementById("box3").innerText) == ""){(this).innerText = document.move; currentUser();} else {alert("already played");}} 
	document.getElementById("box4").onclick = function() {if( (document.getElementById("box4").innerText) == ""){(this).innerText = document.move; currentUser();} else {alert("already played");}} 
	document.getElementById("box5").onclick = function() {if( (document.getElementById("box5").innerText) == ""){(this).innerText = document.move; currentUser();} else {alert("already played");}} 
	document.getElementById("box6").onclick = function() {if( (document.getElementById("box6").innerText) == ""){(this).innerText = document.move; currentUser();} else {alert("already played");}} 
	document.getElementById("box7").onclick = function() {if( (document.getElementById("box7").innerText) == ""){(this).innerText = document.move; currentUser();} else {alert("already played");}} 
	document.getElementById("box8").onclick = function() {if( (document.getElementById("box8").innerText) == ""){(this).innerText = document.move; currentUser();} else {alert("already played");}} 
	document.getElementById("box9").onclick = function() {if( (document.getElementById("box9").innerText) == ""){(this).innerText = document.move; currentUser();} else {alert("already played");}} 
}

function currentUser() {

	if (threeInARow(document.move)) {
		document.winner = document.move;
		alert("Congrats, " + document.move + " you win! Lets play again");
		location.reload();
	} else if (document.move == "X") {
			document.move = "O";
			setMessage(document.move + "'s move");
	} else {
			document.move = "X";
			setMessage(document.move + "'s move");
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


