var board = [
	[' ', ' ', ' '],
	[' ', ' ', ' '],
	[' ', ' ', ' ']
];

board[0].join('') // '   '

if(board[2].join('') === 'xxx') {

}

var finished =
	(board[0].join('') === 'xxx') ||
	(board[1].join('') === 'xxx') ||
	(board[2].join('') === 'xxx') ||
	(board[0].join('') === 'ooo') ||
	(board[1].join('') === 'ooo') ||
	(board[2].join('') === 'ooo')


var victory = false;