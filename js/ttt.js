
//this calls the "ai" based on turn... playing tic tac toe
//--For the first three turns it is quite simple: the computer
//		will try to go center, if not either the first or last corner

//after that things get somewhat complicated.
//--1. I call the count, so that the "newest" value is in the numO
//--2. Here there are a lot of checks, all start with a check to "anyCheck"
//			what this does is to either check if there is an immediate win for
//			either X or O and it will either go for that win, or counter
//--3. After that there are various other checks, knightCheck (taken from
//			the chess move), for example is a way to see if we are getting "forked".
//--4. the checkAll is run which will determine if there is a winner, if not
//				the turn goes back to "X", and new message is set and the turn number
//				is increased. 

// Some notes:
// a. To see a full list of the Ai logic go to ai.js
// b. The moveHold variable, which can seen in use at doubleMoves.js, is a way
//				for the program to replace a check with either X or O. The functions in
//				doubleWin.js are then called in ai.js. Why did I do this? Because I
//				found that either calling one or two of the functions found within
//				doubleMove.js reliably covers all board combinations.
//c. For A LOT of my JS I decided to place if statments in a single line, even
//				if it was very long. This not only helped clean up the code, but made it
//				significantly easier to read. 


function aiTurn() {
	document.move = "O";
	holdThis();

//TURN1
	if ((turnNumber == 1) && (boxNumID(5).innerText == "")) {
		boxNumID(5).innerText = "O";
	} 
//TURN2
	else if (turnNumber == 2) {
		if (boxNumID(5).innerText == "") {
			boxNumID(5).innerText = "O"
		} else {
			boxNumID(7).innerText = "O"
		}
//TURN3
	}	else if 	 (turnNumber == 3) {
		if 				 (boxNumID(9).innerText == "") {
							 	boxNumID(9).innerText = "O";					
		} else if  (boxNumID(1).innerText == "") {
								boxNumID(1).innerText = "O";			
		}
//TURN4
	}	else if (turnNumber == 4) {
			countO();
			alert(document.move);
			alert(moveHold);
			moveHold = "X";
		if (!(numO == 2)) {	
			anyCheck();
		if (!(numO == 2)) {
			knightCheck(); 
		if (!(numO == 2)) {
			outerCheck();
		if (!(numO == 2)) {
			singleDiaCheck();
		if (!(numO == 2)) {
			if (boxNumID(9).innerText == "") {
				boxNumID(9).innerText = "O";				
		}}}}}}		
//TURN5
	}	else if (turnNumber == 5) {
			countO();
			moveHold = "X"
			anyCheck();
		if (!(numO == 3)) {
			moveHold = "O"
			anyCheck();
		if (!(numO == 3)) {
			moveHold = "X";
			knightCheck();
		}}
//TURN6
	} else if (turnNumber == 6) {
		countO();
		moveHold = "O";
		if (!(numO == 3)) {
			anyCheck();
		if (!(numO == 3)) {
			moveHold = "X";
			anyCheck();
		if (!(numO == 3)) {
			knightCheck();
		if (!(numO == 3)) {
			allDiaCheck();
		}}}}
//TURN7
	} else if (turnNumber == 7) {
		alert(moveHold);
		countO();
		anyCheck();
		if (!(numO == 4)) {
			moveHold = "X";
			knightCheck();
		}
//TURN8
	} else if (turnNumber == 8) {
		countO();
		moveHold = "O"
		if (!(numO == 4)) {
			anyCheck();
		if (!(numO == 4)) {
			moveHold = "X";
			anyCheck();
		if (!(numO == 4)) {
			knightCheck();
		if (!(numO == 4)) {
			outerCheck();
		if ((document.move == "O") && (numO == 3)) {
			var once = 0;
			for (var i = 1; i <= 9; i++) {
				if ((boxNumID(i).innerText == "") && (once <= 0)) {
					boxNumID(i).innerText = "O";
					once++;	
				}		
			}
		}}}}}
//TURN9
	} else if (turnNumber == 9) {
		countO();
		if ((document.move == "O") && (numO == 4)) {
			for (var i = 1; i <= 9; i++) {
				if (boxNumID(i).innerText == "") {
					boxNumID(i).innerText = "O";
					
				}				
			}
		}
	}
	checkAll();
	turn();
}




