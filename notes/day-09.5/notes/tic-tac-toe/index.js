var prompt = require('prompt-sync').prompt;

var players = {
	X: null,
	O: null
};

var gameBoard = [
	[' ', ' ', ' '],
	[' ', ' ', ' '],
	[' ', ' ', ' ']
];

var currentPlayer = 'O';
var finished = false;
var winner = false;
var answer = '';
var numSpaces = 9;

console.log('What is the name of the \'X\' player?');
players.X = prompt();

console.log('What is the name of the \'O\' player?');
players.O = prompt();

do {
	currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';

	console.log('    1   2   3');
	console.log('  ~~~~~~~~~~~~~');

	for(var y=0; y<gameBoard.length; y++) {
		console.log(y+1+' | '+gameBoard[y].join(' | ')+' |');
		console.log('  ~~~~~~~~~~~~~');
	}

	do {
		var valid = true;
		console.log(players[currentPlayer]+', it\'s your turn! Enter in the coordinates of where you would like to go in the format x y');
		answer = prompt();
		var pieces = answer.split(' ');
		if(!pieces.length === 2) {
			console.log('Invalid input: you must enter the x and y coordinates separated by spaces');
			valid = false;
		}
		var x = parseInt(pieces[0]);
		var y = parseInt(pieces[1]);

		if(valid && (isNaN(x) || isNaN(y))) {
			console.log('Invalid input: you must enter the x and y coordinates separated by spaces');
			valid = false;
		}

		if(valid && (x < 1 || x > 3 || y < 1 || y > 3)) {
			console.log('Invalid input: those coordinates are outside the playable area');
			valid = false;
		}

		if(valid && (gameBoard[y-1][x-1] !== ' ')) {
			console.log('Invalid input: that space is already taken');
			valid = false;
		}
	} while(!valid);

	gameBoard[y-1][x-1] = currentPlayer;
	numSpaces--;

	for(var x = 0; x < gameBoard[0].length; x++) {
		if(gameBoard[0][x] === 'X' && gameBoard[1][x] === 'X' && gameBoard[2][x] === 'X') {
			winner = 'X';
		}
		else if(gameBoard[0][x] === 'O' && gameBoard[1][x] === 'O' && gameBoard[2][x] === 'O') {
			winner = 'O';
		}
	}

	for(var y = 0; y < gameBoard.length; y++) {
		if(gameBoard[y].join('-') === 'X-X-X') {
			winner = 'X';
		}
		else if(gameBoard[y].join('-') === 'O-O-O') {
			winner = 'O';
		}
	}

	if(gameBoard[0][0] === 'X' && gameBoard[1][1] === 'X' && gameBoard[2][2] === 'X') {
		winner = 'X';
	}
	else if(gameBoard[0][2] === 'X' && gameBoard[1][1] === 'X' && gameBoard[2][0] === 'X') {
		winner = 'X';
	}
	else if(gameBoard[0][0] === 'Y' && gameBoard[1][1] === 'Y' && gameBoard[2][2] === 'Y') {
		winner = 'Y';
	}
	else if(gameBoard[0][2] === 'Y' && gameBoard[1][1] === 'Y' && gameBoard[2][0] === 'Y') {
		winner = 'Y';
	}

	finished = winner || (numSpaces <= 0);

} while(!finished);

console.log('    1   2   3');
console.log('  ~~~~~~~~~~~~~');

for(var y=0; y<gameBoard.length; y++) {
	console.log(y+1+' | '+gameBoard[y].join(' | ')+' |');
	console.log('  ~~~~~~~~~~~~~');
}

console.log(players[winner]+ ' wins!!!');
