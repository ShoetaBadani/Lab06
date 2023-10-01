let currentPlayer = 'X';
const board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

function printBoard() {
  console.log('  0 1 2');
  for (let i = 0; i < 3; i++) {
    let row = i + ' ';
    for (let j = 0; j < 3; j++) {
      row += board[i][j];
      if (j < 2) row += '|';
    }
    console.log(row);
    if (i < 2) console.log('  -----');
  }
}

function checkWinner() {
  for (let i = 0; i < 3; i++) {
    if (board[i][0] !== ' ' && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
      return board[i][0];
    }
    if (board[0][i] !== ' ' && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
      return board[0][i];
    }
  }
  if (board[0][0] !== ' ' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
    return board[0][0];
  }
  if (board[0][2] !== ' ' && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
    return board[0][2];
  }
  return null;
}

function play(row, col) {
  if (row < 0 || row > 2 || col < 0 || col > 2 || board[row][col] !== ' ') {
    console.log('Invalid move. Try again.');
    return;
  }
  board[row][col] = currentPlayer;
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function isBoardFull() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === ' ') {
        return false;
      }
    }
  }
  return true;
}

function main() {
  while (true) {
    printBoard();
    console.log(`Player ${currentPlayer}'s turn. Enter row (0-2) and column (0-2) separated by a space:`);
    let row = parseInt(prompt('Enter row:'));
    let col = parseInt(prompt('Enter column:'));
    play(row, col);
    const winner = checkWinner();
    if (winner) {
      printBoard();
      console.log(`Player ${winner} wins!`);
      break;
    }
    if (isBoardFull()) {
      printBoard();
      console.log('It\'s a draw!');
      break;
    }
  }
}

main();
