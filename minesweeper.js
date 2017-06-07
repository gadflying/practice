function createBoard(width, height) {
  const board = new Array(height).fill(0);
  board.forEach((record, index) => {
    board[index] = new Array(width).fill(0);
  });
  return board;
}

function addMines(board, width, height, numMines) {
  // Keep track of mines and do not add if repeated
  const addedMines = [];
  while (addedMines.length < numMines && numMines < width * height) {
    const y = Math.floor(Math.random() * height);
    const x = Math.floor(Math.random() * width);
    if (!addedMines.includes(`${x},${y}`)) {
      addedMines.push(`${x},${y}`);
      board[y][x] = '*';
    }
  }
}

function addHints(board, width, height) {
  const deltas = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1]
  ];

  board.forEach((row, y) => {
    row.forEach((recordX, x) => {
      if (board[y][x] === '*') {
        // Consider boundary checking
        deltas.forEach((delta) => {
          const deltaX = delta[1];
          const deltaY = delta[0];
          const withinRange = y + deltaY >= 0
            && y + deltaY < height
            && x + deltaX >= 0
            && x + deltaX < width
            && board[y + deltaY][x + deltaX] !== '*';

          if (withinRange) {
            board[y + deltaY][x + deltaX] += 1;
          }
        });
      }
    });
  });
}

function printBoard(board) {
  board.forEach((y) => {
    console.log(y.join(''));
  });
}

function generateBoard(width, height, numMines) {
  // Step 1: Create board
  const board = createBoard(width, height);

  // Step 2: Add Mines
  addMines(board, width, height, numMines);

  // Step 3: Add hints
  addHints(board, width, height);

  // Step 4; Print board
  printBoard(board);
}

generateBoard(5, 5, 4);
