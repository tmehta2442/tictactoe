//this will cycle thru the boxes, and on a click, if nothing has been selected
//will play the current piece (right now human can only play as X). I kept the 
//"document.move" in there on line 13, rather than hard coding "O" for two
//reasons: a good check to see if I am indeed on the right turn, BUT also
//because I want to eventaully add functionality where "X" and "O" are 
//assigned randomly to a human or computer.

//OHHH take a look below at my original implementation! I am quite glad I 
//figured out how to write the below function. Being "DRY" is nice :)

function turn() {
	for (var i = 1; i <= 9; i++) {
		var createBox = boxNumID(i);

		createBox.onclick = function() {
			if ((this).innerText == "") {
				(this).innerText = document.move;
				withinTurn();
			} else {
				alert("already played");
			}
		}
	}
}


//look at what the above WAS!!! Took some thinking to refactor that above code from what is was below. 
// function turn() {
// 	boxNumID(1).onclick = function() {if( (boxNumID(1).innerText) == ""){(this).innerText = document.move; withinTurn();} else {alert("already played");}}
// 	boxNumID(2).onclick = function() {if( (boxNumID(2).innerText) == ""){(this).innerText = document.move; withinTurn();} else {alert("already played");}} 
// 	boxNumID(3).onclick = function() {if( (boxNumID(3).innerText) == ""){(this).innerText = document.move; withinTurn();} else {alert("already played");}} 
// 	boxNumID(4).onclick = function() {if( (boxNumID(4).innerText) == ""){(this).innerText = document.move; withinTurn();} else {alert("already played");}} 
// 	boxNumID(5).onclick = function() {if( (boxNumID(5).innerText) == ""){(this).innerText = document.move; withinTurn();} else {alert("already played");}} 
// 	boxNumID(6).onclick = function() {if( (boxNumID(6).innerText) == ""){(this).innerText = document.move; withinTurn();} else {alert("already played");}} 
// 	boxNumID(7).onclick = function() {if( (boxNumID(7).innerText) == ""){(this).innerText = document.move; withinTurn();} else {alert("already played");}} 
// 	boxNumID(8).onclick = function() {if( (boxNumID(8).innerText) == ""){(this).innerText = document.move; withinTurn();} else {alert("already played");}} 
// 	boxNumID(9).onclick = function() {if( (boxNumID(9).innerText) == ""){(this).innerText = document.move; withinTurn();} else {alert("already played");}}
// }