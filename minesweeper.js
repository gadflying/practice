function createBoard(width, height) {
  const board = [...Array(height)];
  board.forEach((row, index) => {
    board[index] = Array(width).fill(0);
  });

  return board;
}

function addMines(board, width, height, numMines) {
  const nextBoard = board.slice();
  // Keep track of mines and do not add if repeated
  const addedMines = [];
  while (addedMines.length < numMines && numMines < width * height) {
    const y = Math.floor(Math.random() * height);
    const x = Math.floor(Math.random() * width);
    if (!addedMines.includes(`${x},${y}`)) {
      addedMines.push(`${x},${y}`);
      nextBoard[y][x] = '*';
    }
  }

  return nextBoard;
}

function addHints(board, width, height) {
  const nextBoard = board.slice();
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

  nextBoard.forEach((row, y) => {
    row.forEach((cell, x) => {
      if (cell === '*') {
        // Consider boundary checking
        deltas.forEach((delta) => {
          const [deltaY, deltaX] = delta;
          const withinRange = y + deltaY >= 0
            && y + deltaY < height
            && x + deltaX >= 0
            && x + deltaX < width
            && nextBoard[y + deltaY][x + deltaX] !== '*';

          if (withinRange) {
            nextBoard[y + deltaY][x + deltaX] += 1;
          }
        });
      }
    });
  });

  return nextBoard;
}

function printBoard(board) {
  board.forEach((y) => {
    console.log(y.join(''));
  });
}

function generateBoard(width, height, numMines) {
  // Step 1: Create board
  let board = createBoard(width, height);

  // Step 2: Add Mines
  board = addMines(board, width, height, numMines);

  // Step 3: Add hints
  board = addHints(board, width, height);

  // Step 4; Print board
  printBoard(board);
}

generateBoard(5, 5, 4);
