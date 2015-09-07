//So this is kinda interesting. I did my best to name according to a literal translation. For example
// "topCorners" refers to the top two corers.
//The functions can refer to holding either a "X" or "O" value, based on "moveHold". If the function holds
//		true, then I return that. This is important because I use these true/fasles in the ai.js. So it kinda
//		runs like this: 
//			1. in aiTurn() the "movehold" is either set or the inherited value is used. 
//			2. Then a function in ai.js is run.
//			3. That function will then refer to a function here, which uses the "moveHold" to determine true/false
//			4. now back to the ai.js, based on the t/f combination, a box will be filled with the correct "O"

function topCorners() 		 { if( (boxNumID(1).innerText == moveHold) && (boxNumID(3).innerText == moveHold)) {return true;} else {return false;}}
function bottomCorners() 	 { if( (boxNumID(7).innerText == moveHold) && (boxNumID(9).innerText == moveHold)) {return true;} else {return false;}}
function firstColCorners() { if( (boxNumID(1).innerText == moveHold) && (boxNumID(7).innerText == moveHold)) {return true;} else {return false;}}
function thirdColCorners() { if( (boxNumID(3).innerText == moveHold) && (boxNumID(9).innerText == moveHold)) {return true;} else {return false;}}
function midCol() 		 		 { if( (boxNumID(2).innerText == moveHold) && (boxNumID(8).innerText == moveHold)) {return true;} else {return false;}}
function midRow() 		 		 { if( (boxNumID(4).innerText == moveHold) && (boxNumID(6).innerText == moveHold)) {return true;} else {return false;}}
function rowCheck1a() 		 { if( (boxNumID(1).innerText == moveHold) && (boxNumID(2).innerText == moveHold)) {return true;} else {return false;}}
function rowCheck1b() 		 { if( (boxNumID(2).innerText == moveHold) && (boxNumID(3).innerText == moveHold)) {return true;} else {return false;}}
function rowCheck2a() 		 { if( (boxNumID(4).innerText == moveHold) && (boxNumID(5).innerText == moveHold)) {return true;} else {return false;}}
function rowCheck2b() 		 { if( (boxNumID(5).innerText == moveHold) && (boxNumID(6).innerText == moveHold)) {return true;} else {return false;}}
function rowCheck3a() 		 { if( (boxNumID(7).innerText == moveHold) && (boxNumID(8).innerText == moveHold)) {return true;} else {return false;}}
function rowCheck3b() 		 { if( (boxNumID(8).innerText == moveHold) && (boxNumID(9).innerText == moveHold)) {return true;} else {return false;}}
function colCheck1a() 		 { if( (boxNumID(1).innerText == moveHold) && (boxNumID(4).innerText == moveHold)) {return true;} else {return false;}}
function colCheck1b() 		 { if( (boxNumID(4).innerText == moveHold) && (boxNumID(7).innerText == moveHold)) {return true;} else {return false;}}
function colCheck2a() 		 { if( (boxNumID(2).innerText == moveHold) && (boxNumID(5).innerText == moveHold)) {return true;} else {return false;}}
function colCheck2b() 		 { if( (boxNumID(5).innerText == moveHold) && (boxNumID(8).innerText == moveHold)) {return true;} else {return false;}}
function colCheck3a() 		 { if( (boxNumID(3).innerText == moveHold) && (boxNumID(6).innerText == moveHold)) {return true;} else {return false;}}
function colCheck3b() 		 { if( (boxNumID(6).innerText == moveHold) && (boxNumID(9).innerText == moveHold)) {return true;} else {return false;}}
function smDiaCheck1() 		 { if( (boxNumID(2).innerText == moveHold) && (boxNumID(4).innerText == moveHold)) {return true;} else {return false;}}
function smDiaCheck2() 		 { if( (boxNumID(2).innerText == moveHold) && (boxNumID(6).innerText == moveHold)) {return true;} else {return false;}}
function smDiaCheck3() 		 { if( (boxNumID(4).innerText == moveHold) && (boxNumID(8).innerText == moveHold)) {return true;} else {return false;}}
function smDiaCheck4() 		 { if( (boxNumID(6).innerText == moveHold) && (boxNumID(8).innerText == moveHold)) {return true;} else {return false;}}
function diaCheck1() 			 { if( (boxNumID(1).innerText == moveHold) && (boxNumID(5).innerText == moveHold)) {return true;} else {return false;}}
function diaCheck2() 			 { if( (boxNumID(3).innerText == moveHold) && (boxNumID(5).innerText == moveHold)) {return true;} else {return false;}}
function diaCheck3() 			 { if( (boxNumID(7).innerText == moveHold) && (boxNumID(5).innerText == moveHold)) {return true;} else {return false;}}
function diaCheck4() 			 { if( (boxNumID(9).innerText == moveHold) && (boxNumID(5).innerText == moveHold)) {return true;} else {return false;}}
function diaEndCheck1() 	 { if( (boxNumID(1).innerText == moveHold) && (boxNumID(9).innerText == moveHold)) {return true;} else {return false;}}
function diaEndCheck2() 	 { if( (boxNumID(3).innerText == moveHold) && (boxNumID(7).innerText == moveHold)) {return true;} else {return false;}}
function knight1() 	 			 { if( (boxNumID(1).innerText == moveHold) && (boxNumID(8).innerText == moveHold)) {return true;} else {return false;}}
function knight2() 	 			 { if( (boxNumID(1).innerText == moveHold) && (boxNumID(6).innerText == moveHold)) {return true;} else {return false;}}
function knight3() 	 			 { if( (boxNumID(2).innerText == moveHold) && (boxNumID(7).innerText == moveHold)) {return true;} else {return false;}}
function knight4() 	 			 { if( (boxNumID(2).innerText == moveHold) && (boxNumID(9).innerText == moveHold)) {return true;} else {return false;}}
function knight5() 	 			 { if( (boxNumID(3).innerText == moveHold) && (boxNumID(4).innerText == moveHold)) {return true;} else {return false;}}
function knight6() 	 			 { if( (boxNumID(3).innerText == moveHold) && (boxNumID(8).innerText == moveHold)) {return true;} else {return false;}}
function knight7() 	 			 { if( (boxNumID(6).innerText == moveHold) && (boxNumID(7).innerText == moveHold)) {return true;} else {return false;}}
function knight8() 	 			 { if( (boxNumID(4).innerText == moveHold) && (boxNumID(9).innerText == moveHold)) {return true;} else {return false;}}