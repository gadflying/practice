/*
* Implement Conway's Game of Life
* https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life
*/

var Board = function(xMax, yMax) {
	xMax = xMax || 20;
	yMax = yMax || 20;

	var NEIGHBOR = {
		TOP_LEFT: 0,
		TOP: 1,
		TOP_RIGHT: 2,
		RIGHT: 3,
		BOTTOM_RIGHT: 4,
		BOTTOM: 5,
		BOTTOM_LEFT: 6,
		LEFT: 7
	}

	var NUM_NEIGHBORS = 8;

	var board = [];

	// Create board
	for(var x = 0; x < xMax; x++) {
		board.push([])
		for(var y = 0; y < yMax; y++) {
			board[x].push(new Cell());
		}
	}

	// Create neighbors array for each cell. 
	for (var x = 0; x < xMax; x++) {
		for (var y = 0; y < yMax; y++) {
			var neighbors = new Array(NUM_NEIGHBORS);

			// Board is stitched to make it infinte
			neighbors[NEIGHBOR.TOP_LEFT] = board[getLeftPosition(x)][getTopPosition(y)];
			neighbors[NEIGHBOR.TOP] = board[x][getTopPosition(y)];
			neighbors[NEIGHBOR.TOP_RIGHT] = board[getRightPosition(x)][getTopPosition(y)];
			neighbors[NEIGHBOR.RIGHT] = board[getRightPosition(x)][y];
			neighbors[NEIGHBOR.BOTTOM_RIGHT] = board[getRightPosition(x)][getBottomPosition(y)];
			neighbors[NEIGHBOR.BOTTOM] = board[x][getBottomPosition(y)];
			neighbors[NEIGHBOR.BOTTOM_LEFT] = board[getLeftPosition(x)][getBottomPosition(y)];
			neighbors[NEIGHBOR.LEFT] = board[getLeftPosition(x)][y];

			board[x][y].setNeighbors(neighbors);
		}
	}

	// Helper functions for better readibility
	function getLeftPosition(x) {
		return x - 1 < 0 ? xMax - 1 : x - 1;
	}

	function getRightPosition(x) {
		return x + 1 >= xMax ? 0 : x + 1;
	}

	function getTopPosition(y) {
		return y - 1 < 0 ? yMax - 1 : y - 1;
	}

	function getBottomPosition(y) {
		return y + 1 >= yMax ? 0 : y + 1;
	}

	this.print = function() {
		for (var x = 0; x < xMax; x++) {
			var row = "";
			for (var y = 0; y < yMax; y++) {
				row += board[x][y].isAlive() ? "E" : "O";
			}
			console.log(row);
		}
	}

	this.lifeHappens = function() {
		for (var x = 0; x < xMax; x++) {
			for(var y = 0; y < yMax; y++) {
				board[x][y].calculateNextGeneration();
			}
		}
	}

	// Call this function to calculate next generation and print board
	this.tick = function() {
		this.lifeHappens();

		for (var x = 0; x < xMax; x++) {
			for(var y = 0; y < yMax; y++) {
				board[x][y].tick();
			}
		}

		this.print();
	}
}

// Cell class
var Cell = function() {

	// Randomly determine if cell is alive
	var alive = Math.floor((Math.random() * 100000)) < 50000;
	var nextGeneration;
	var neighbors = [];

	this.getNeighbors = function() {
		return neighbors;
	},

	this.setNeighbors = function(newNeighbors) {
		neighbors = newNeighbors;
	}

	this.isAlive = function() {
		return alive;
	}

	this.tick = function() {
		alive = nextGeneration;
		nextGeneration = null;
	}

	this.calculateNextGeneration = function() {

		// Count the number of neighbors that are alive
		var numAlive = neighbors.filter(function(neighbor) {
			return neighbor.isAlive();
		}).length;

		// Per rules of Conway's Game of Life
		if (alive) {
			if (numAlive < 2 || numAlive > 3) {
				// Dies because of overpopulation
				nextGeneration = false;
			} else {
				// numAlive === 2 || numAlive === 3
				// Stays alive. Reproduces
				nextGeneration = true;
			}
		} else {
			// Dead cell
			if (numAlive === 3) {
				// Comes back alive because of reproduction
				nextGeneration = true;
			} else {
				nextGeneration = false;
			}
		}
	}
}

var board = new Board(5,5);
