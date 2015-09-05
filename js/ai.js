// checking for any two in a row and if open will take the open space for a move
function anyCheck() {
	if 			(topCorners() 			&& (boxNumID(2).innerText == "")) {boxNumID(2).innerText = "O"; anyCheckWin = true;}
	else if (bottomCorners() 		&& (boxNumID(8).innerText == "")) {boxNumID(8).innerText = "O"; anyCheckWin = true;}
	else if (firstColCorners() 	&& (boxNumID(4).innerText == "")) {boxNumID(4).innerText = "O"; anyCheckWin = true;}
	else if (thirdColCorners() 	&& (boxNumID(6).innerText == "")) {boxNumID(6).innerText = "O"; anyCheckWin = true;}
	else if (rowCheck1a() 			&& (boxNumID(3).innerText == "")) {boxNumID(3).innerText = "O"; anyCheckWin = true;}
	else if (rowCheck1b() 			&& (boxNumID(1).innerText == "")) {boxNumID(1).innerText = "O"; anyCheckWin = true;}
	else if (rowCheck2a() 			&& (boxNumID(6).innerText == "")) {boxNumID(6).innerText = "O"; anyCheckWin = true;}
	else if (rowCheck2b() 			&& (boxNumID(4).innerText == "")) {boxNumID(4).innerText = "O"; anyCheckWin = true;}
	else if (rowCheck3a() 			&& (boxNumID(9).innerText == "")) {boxNumID(9).innerText = "O"; anyCheckWin = true;}
	else if (rowCheck3b() 			&& (boxNumID(7).innerText == "")) {boxNumID(7).innerText = "O"; anyCheckWin = true;}
	else if (colCheck1a() 			&& (boxNumID(7).innerText == "")) {boxNumID(7).innerText = "O"; anyCheckWin = true;}
	else if (colCheck1b() 			&& (boxNumID(1).innerText == "")) {boxNumID(1).innerText = "O"; anyCheckWin = true;}
	else if (colCheck2a() 			&& (boxNumID(8).innerText == "")) {boxNumID(8).innerText = "O"; anyCheckWin = true;}
	else if (colCheck2b() 			&& (boxNumID(2).innerText == "")) {boxNumID(2).innerText = "O"; anyCheckWin = true;}
	else if (colCheck3a() 			&& (boxNumID(9).innerText == "")) {boxNumID(9).innerText = "O"; anyCheckWin = true;}
	else if (colCheck3b() 			&& (boxNumID(3).innerText == "")) {boxNumID(3).innerText = "O"; anyCheckWin = true;}
  else if (diaCheck1() 				&& (boxNumID(9).innerText == "")) {boxNumID(9).innerText = "O"; anyCheckWin = true;}
  else if (diaCheck2() 				&& (boxNumID(7).innerText == "")) {boxNumID(7).innerText = "O"; anyCheckWin = true;}
  else if (diaCheck3() 				&& (boxNumID(3).innerText == "")) {boxNumID(3).innerText = "O"; anyCheckWin = true;}
  else if (diaCheck4() 				&& (boxNumID(1).innerText == "")) {boxNumID(1).innerText = "O"; anyCheckWin = true;}
  return anyCheckWin
}

//counter any "knight move" X may make

function knightCheck() {
	if (turnNumber == 5) {
		if 			(knight1() && (boxNumID(3).innerText == "")) {boxNumID(3).innerText = "O";}
		else if (knight2() && (boxNumID(7).innerText == "")) {boxNumID(7).innerText = "O";}
		else if (knight4() && (boxNumID(7).innerText == "")) {boxNumID(7).innerText = "O";}
		else if (knight8() && (boxNumID(3).innerText == "")) {boxNumID(3).innerText = "O";}
	} else if (turnNumber == 7) {
		if (knight1() && knight6()) { 
			if (boxNumID(4).innerText == "") {
				boxNumID(4).innerText = "O";
			} else if (boxNumID(6).innerText == "") {
				boxNumID(6).innerText = "O";
			}
		}
	}
}
