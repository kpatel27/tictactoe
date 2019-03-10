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

function turnClick(square) {
  console.log(square.target.id);
}

const CELLS = document.querySelectorAll('.cell');
startGame();
