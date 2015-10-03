/* 
* Create the algorithm for a tic-tac-toe game that determines the next move
* based on the last move and the current state of the board
*/ 

// Player enum
var PLAYER = {
	X: 1,
	O: 2
}

// Game state enum
var STATE = {
	WIN: "WIN",
	CONTINUE: "CONTINUE",
	TIE: "TIE"
}

// Move class. Represents a move the player has made
var Move = function(newX, newY, newP) {
	this.x = newX,
	this.y = newY,
	this.p = newP
}

// Game class. 
var Game = function() {
	var numMoves = 0;
	var board = [[null, null, null], [null, null, null], [null, null, null]];

	// History of moves
	var moves = [];

	// TODO: Manage whose turn it is

	this.getNumMoves = function() {
		return numMoves;
	}

	// Bootstrap the board for testing
	this.setBoard = function(newBoard) {
		board = newBoard;
		numMoves = this.countBoardMoves();
	}

	this.getBoard = function() {
		return board;
	}

	// Traverse the board. Counting how many moves have been made
	this.countBoardMoves = function() {
		return board.reduce(function(a, b) {
			// Flatten the matrix into one array
			return a.concat(b);
		}).reduce(function(a, b) {
			// Count the number of moves
			return a += b === null ? 0 : 1;
		}, 0);
	}

	this.setMove = function(move) {
		numMoves += 1;
		board[move.x][move.y] = move.p;
	};

	this.getMove = function(x, y) {
		return board[x][y];
	}

	// Determine if game continues
	this.nextMove = function(move) {
		if (this.isWin(move)) {
			return STATE.WIN;
		} else if (this.isTie()) {
			return STATE.TIE;
		} else {
			return STATE.CONTINUE;
		}
	}

	// Is the game won with this move?
	this.isWin = function(move) {
		var x = move.x;
		var y = move.y;

		// Vertical victory
		var downWin = board[x].every(function(mark) {
			return mark === move.p;
		});

		// Horizontal victory
		var sideWin = true;
		for(var i = 0; i < 3; i++) {
			sideWin = sideWin && board[i][y] === move.p;
		}

		// Diagonal victory
		var diagWin = true;
		if (x === y) {
			// Left-top to bottom-right
			for (var i = 0; i < 3; i++) {
				diagWin = diagWin && board[i][i] === move.p;
			}
		} else if (y === 2 - x) {
			// Right-top to bottom-left
			for (var i = 0; i < 3; i++) {
				diagWin = diagWin && board[i][2 - i] === move.p;
			}
		} else {
			// Not a diagonal win;
			diagWin = false;
		}

		return downWin || sideWin || diagWin;
	}
	
	// To determine if the board is a stalement, keep a count of the moves.
	// Alternative solution is to loop through 3x3 array
	this.isTie = function() {
		var MAX_MOVES = 9;
		return numMoves === MAX_MOVES;
	}
}

// States of board
/*
* O X O
* - - -
* X X O
*/
var winBoard = [];
winBoard.push([PLAYER.O, PLAYER.X, PLAYER.O]);
winBoard.push([null, null, null]);
winBoard.push([PLAYER.X, PLAYER.X, PLAYER.O]);

/*
* O X O
* O X X
* X O X
*/
var tieBoard = [];
tieBoard.push([PLAYER.O, PLAYER.X, PLAYER.O]);
tieBoard.push([PLAYER.O, PLAYER.X, PLAYER.X]);
tieBoard.push([PLAYER.X, PLAYER.O, PLAYER.X]);

// Moves
var move = new Move(1, 2, PLAYER.O);
var tieMove = new Move(1, 1, PLAYER.X);

// Games
var winGame = new Game();
winGame.setBoard(winBoard);
winGame.setMove(move);
winGame.nextMove(move); // ==> "WIN"

var tieGame = new Game();
tieGame.setBoard(tieBoard);
tieGame.nextMove(tieMove); // ==> "TIE"

var game = new Game();
game.setMove(move);
game.nextMove(move); // ==> "CONTINUE";