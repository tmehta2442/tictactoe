// checking for any two in a row and if open will take the open space for a move
function anyCheck() {
	if			(topCorners() 			&& (boxNumID(2).innerText == "")) {boxNumID(2).innerText = "O";}
	else if (bottomCorners() 		&& (boxNumID(8).innerText == "")) {boxNumID(8).innerText = "O";}
	else if (firstColCorners() 	&& (boxNumID(4).innerText == "")) {boxNumID(4).innerText = "O";}
	else if (thirdColCorners() 	&& (boxNumID(6).innerText == "")) {boxNumID(6).innerText = "O";}
	else if (rowCheck1a() 			&& (boxNumID(3).innerText == "")) {boxNumID(3).innerText = "O";}
	else if (rowCheck1b() 			&& (boxNumID(1).innerText == "")) {boxNumID(1).innerText = "O";}
	else if (rowCheck2a() 			&& (boxNumID(6).innerText == "")) {boxNumID(6).innerText = "O";}
	else if (rowCheck2b() 			&& (boxNumID(4).innerText == "")) {boxNumID(4).innerText = "O";}
	else if (rowCheck3a() 			&& (boxNumID(9).innerText == "")) {boxNumID(9).innerText = "O";}
	else if (rowCheck3b() 			&& (boxNumID(7).innerText == "")) {boxNumID(7).innerText = "O";}
	else if (colCheck1a() 			&& (boxNumID(7).innerText == "")) {boxNumID(7).innerText = "O";}
	else if (colCheck1b() 			&& (boxNumID(1).innerText == "")) {boxNumID(1).innerText = "O";}
	else if (colCheck2a() 			&& (boxNumID(8).innerText == "")) {boxNumID(8).innerText = "O";}
	else if (colCheck2b() 			&& (boxNumID(2).innerText == "")) {boxNumID(2).innerText = "O";}
	else if (colCheck3a() 			&& (boxNumID(9).innerText == "")) {boxNumID(9).innerText = "O";}
	else if (colCheck3b() 			&& (boxNumID(3).innerText == "")) {boxNumID(3).innerText = "O";}
	else if (diaCheck1() 				&& (boxNumID(9).innerText == "")) {boxNumID(9).innerText = "O";}
	else if (diaCheck2() 				&& (boxNumID(7).innerText == "")) {boxNumID(7).innerText = "O";}
	else if (diaCheck3() 				&& (boxNumID(3).innerText == "")) {boxNumID(3).innerText = "O";}
	else if (diaCheck4() 				&& (boxNumID(1).innerText == "")) {boxNumID(1).innerText = "O";}
	countO();
}

//counter any "knight move" X may make
//--notice that due to similarities in position strength, that the final box that will be placed with
//		an "O" can have multiple knights called. This dramatically reduced the logic confusion, not
//		to mention this function's length
function knightCheck() {
	if (		(turnNumber == 4)) {
		if 			( (knight1() || knight8() ) && (boxNumID(7).innerText == "")) {boxNumID(7).innerText = "O";}
		else if ( (knight2() || knight4() ) && (boxNumID(3).innerText == "")) {boxNumID(3).innerText = "O";}
		else if ( (knight3() || knight5() ) && (boxNumID(1).innerText == "")) {boxNumID(1).innerText = "O";}
		else if ( (knight6() || knight7() ) && (boxNumID(9).innerText == "")) {boxNumID(9).innerText = "O";}}
	else 	if(turnNumber == 5) {
		if 			( (knight1() || knight8() ) && (boxNumID(3).innerText == "")) {boxNumID(3).innerText = "O";}
		else if (	(knight2() || knight4() ) && (boxNumID(7).innerText == "")) {boxNumID(7).innerText = "O";}}
	else if ((turnNumber == 6) || (turnNumber == 7)) {
		if 			(knight1() && knight6()) { 
			if 			(boxNumID(4).innerText == "") {boxNumID(4).innerText = "O";} 
			else if (boxNumID(6).innerText == "") {boxNumID(6).innerText = "O";}}
		else if (knight2() && knight7()) {
			if 			(boxNumID(2).innerText == "") {boxNumID(2).innerText = "O";} 
			else if (boxNumID(8).innerText == "") {boxNumID(8).innerText = "O";}}
	  else if (knight3() && knight4()) {
			if 			(boxNumID(4).innerText == "") {boxNumID(4).innerText = "O";} 
			else if (boxNumID(6).innerText == "") {boxNumID(6).innerText = "O";}}
	  else if (knight5() && knight8()) {
			if 			(boxNumID(2).innerText == "") {boxNumID(2).innerText = "O";} 
			else if (boxNumID(7).innerText == "") {boxNumID(7).innerText = "O";}} 
		else if ((knight3() || knight6()) && (smDiaCheck2() || smDiaCheck3()) ){
			if (boxNumID(9).innerText == "") {boxNumID(9).innerText = "O";}}
		else if ((knight1() || knight4()) && (smDiaCheck1() || smDiaCheck4()) ){
			if (boxNumID(3).innerText == "") {boxNumID(3).innerText = "O";}
		}
	}
	countO();
}

function outerCheck() {
	if (turnNumber == 4) {
		if 			(diaEndCheck1() || diaEndCheck2() || midRow() ) { if (boxNumID(2).innerText == "") {boxNumID(2).innerText = "O";}
			else if (boxNumID(8).innerText == "") {boxNumID(8).innerText = "O";}}
		else if (midCol()) 			 { if (boxNumID(4).innerText == "") {boxNumID(4).innerText = "O";}
			else if (boxNumID(6).innerText == "") {boxNumID(6).innerText = "O";}		
		}
	}
	countO();
}

function singleDiaCheck() {
	if 			(smDiaCheck1()) { if (boxNumID(1).innerText == "") { boxNumID(1).innerText = "O"; }}
	else if (smDiaCheck2()) { if (boxNumID(3).innerText == "") { boxNumID(3).innerText = "O"; }}
	else if (smDiaCheck3()) { if (boxNumID(7).innerText == "") { boxNumID(7).innerText = "O"; }}
	else if (smDiaCheck4()) { if (boxNumID(9).innerText == "") { boxNumID(9).innerText = "O"; }
	}
	countO();
}

function allDiaCheck() {
	if (turnNumber == 6) {
		if 			( (smDiaCheck1()) && (smDiaCheck2()) ) { if (boxNumID(7).innerText == "") {boxNumID(7).innerText = "O";} 
			else if (boxNumID(9).innerText == "") {boxNumID(9).innerText = "O";}}
		else if ( (smDiaCheck3()) && (smDiaCheck4()) ) { if (boxNumID(1).innerText == "") {boxNumID(1).innerText = "O";}
			else if (boxNumID(3).innerText == "") {boxNumID(3).innerText = "O";}
		}
	}
	countO();
}





