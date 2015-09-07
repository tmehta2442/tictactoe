tic tac toe  
Can be found live at: https://stark-savannah-7401.herokuapp.com/

So this was a very intersting task. Building a TTT game that just had 2 human users was pretty straightforwawrd. Adding the AI was surprisingly difficult. In addition to the notes I have below, plase do read my comments within the JS files at it closely follows what is going on. 

How I went about TTT:

** *Moves 1-3* **  
For the AI I realized that either it took the center box (box5) if ti got first move, or tried to take it if it went after the human player. If that was still not available, then it took a corner spot. 

Not a heavy amount of AI here, but it locked down the first 3 moves quite nicely. Then things got interesting.

** *Moves 4-8* **  while there is a decent amount of consistency it what goes on, building it out required a lot of logic.

*Human player*: Here humanMove.js is run. Depending on where you click, and if it is empty, a "X" is placed.

*AI*: Fun Times. It is turn based & depending on the human player's move, the AI will counter. Check ttt.js for more info.
