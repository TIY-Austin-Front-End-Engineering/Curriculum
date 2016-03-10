var gameBoardMatrix = [
    [' ', 'X', ' '],
    ['O', 'X', 'O'],
    ['X', ' ', ' '],
    ['A', 'A', 'A']
];

var gameBoardMatrix2 = [
    [' ', 'X', ' '],
    ['O', 'X', 'O'],
    ['X', 'X', ' ']
];

function  getGameBoardString(gameBoard) {
	// create a string to remember what my board looks like currently
	// set that string to the first two rows
		var gs = '\n\
     1   2   3\n\
  ~~~~~~~~~~~~~';
	// iterate over each row
	for(var i=0; i<gameBoard.length; i++) {
		// add that row to the string
		gs = gs + '\n';
		// add the row number to the string, add | to the string
		gs = gs + (i+1) + ' |';
		// iterate over the row
		for(var x=0; x<gameBoard[i].length; x++) {
			// add the cell to the string
			gs = gs + ' ' + gameBoard[i][x] + ' |';

		}
				
				
		// add the ~~~~ to the string
		gs = gs + '\n  ~~~~~~~~~~~~~';
		// return the string
	}
	return gs;

// 	var gs = '\n\
//      1   2   3\n\
//   ~~~~~~~~~~~~~\n\
// 1 | '+gameBoard[0][0]+' | '+gameBoard[0][1]+' | '+gameBoard[0][2]+' |\n\
//   ~~~~~~~~~~~~~\n\
// 2 | '+gameBoard[1][0]+' | '+gameBoard[1][1]+' | '+gameBoard[1][2]+' |\n\
//   ~~~~~~~~~~~~~\n\
// 3 | '+gameBoard[2][0]+' | '+gameBoard[2][1]+' | '+gameBoard[2][2]+' |\n\
//   ~~~~~~~~~~~~~';
//   	return gs;
}

console.log(getGameBoardString(gameBoardMatrix));