// Hi! So this turned out to be a lot more difficult than I had expected... 
// I have some refactoring to do, and eventually I want to mimick the way
// threeInARow is being used, but for 2 space and other situations. 
// Anyway, right now this is somewhat playable... some errors persist,
// but with some more time and code cleanup this will actaully work quite well.

// Thanks!

// -TJ

//this calls the "ai" based on turn... playing tic tac toe
function aiTurn() {
	document.move = "O";
	holdThis();

//TURN1
	if ((turnNumber == 1) && (boxNumID(5).innerText == "")) {
		boxNumID(5).innerText = "O";
		//countO();
	} 
//TURN2
	else if (turnNumber == 2) {
		if (boxNumID(5).innerText == "") {
			boxNumID(5).innerText = "O"
		} else {
			boxNumID(7).innerText = "O"
		}
		//countO();
//TURN3
	}	else if 	 (turnNumber == 3) {
		if 				 (boxNumID(9).innerText == "") {
							 	boxNumID(9).innerText = "O";					
		} else if  (boxNumID(1).innerText == "") {
								boxNumID(1).innerText = "O";			
		}
		//countO();
//TURN4
	}	else if (turnNumber == 4) {
			countO();
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
	}
		
//TURN5
		else if (turnNumber == 5) {
			countO();
			moveHold = "X"
			anyCheck();
		if (!(numO == 3)) {
			moveHold = "O"
			anyCheck();
		if (!(numO == 3)) {
			moveHold = "X";
			knightCheck();
		}
	}
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
		}}}

//TURN7
	} else if (turnNumber == 7) {
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




