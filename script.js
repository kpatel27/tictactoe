var originalBoard;
const USER = 'X';
const COMPUTER = 'O';
const WIN_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
]

function startGame() {
  document.querySelector('.end-game').style.display = "none";
  origBoard = Array.from(Array(9).keys());
  for (var i = 0; i < CELLS.length; i++) {
    CELLS[i].innerText = '';
    CELLS[i].style.removeProperty('background-color');
    CELLS[i].addEventListener('click', turnClick, false);
  }
}

function turn(squareId, player) {
  document.getElementById(squareId).innerText = player;
  let gameWon = checkWin(origBoard, player);
  if (gameWon) {
    gameOver(gameWon);
  }
}

function turnClick(square) {
  turn(square.target.id, USER);
}

function checkWin(board, player) {
  let plays = board.reduce((a, e, i) => (e === player) ? a.concat(i) : a, []);
  let gameWon = null;
  for (let [index, win] of WIN_COMBOS.entries()) {
    if (win.every(elem => plays.indexOf(elem) > -1)) {
      gameWon = {index: index, player: player};
      break;
    }
  }
  return gameWon;
}

function gameOver(gameWon) {
  for (let index of WIN_COMBOS[gameWon.index]) {
    document.getElementById(index).style.backgroundColor =
    gameWon.player == USER ? "blue" : "red";
  }
  for (var i = 0; i < CELLS.length; i++) {
    CELLS[i].removeEventListener('click', turnClick, false);
  }
}

const CELLS = document.querySelectorAll('.cell');
startGame();
