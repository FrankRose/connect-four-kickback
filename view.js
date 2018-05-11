window.onload = function() {
  let numCols = 7;
  let numRows = 6;

  const $board = document.getElementById('board');

  for (let colId = 0; colId < numCols; colId++) {
    const $col = createColumn(colId);

    for (let rowId = 0; rowId < numRows; rowId++) {
      const $square = createSquare(colId, rowId);

      $col.appendChild($square);
    }
    $board.appendChild($col);
  }
  addColumnClickHandlers();
};

function createColumn(colId) {
  const $col = document.createElement('div');
  $col.setAttribute('class', 'col');
  $col.setAttribute('id', colId);

  return $col;
}

function createSquare(colId, rowId) {
  const $square = document.createElement('div');
  $square.setAttribute('class', 'square');
  $square.setAttribute('id', '' + colId + rowId);

  return $square;
}

function showWinner(color) {
  const $banner = document.getElementById('banner');
  $banner.setAttribute('class', 'winner');
  $banner.innerHTML = `${color} has won`;

  setTimeout(function() {
    resetBoard();
  }, 2500);
}

function showWinningPieces(squares) {
  squares.forEach(sqr => {
    sqr.style.border = 'thick solid #0000FF';
  });
}

function resetBoard() {
  const playAgain = confirm('Play Again?');

  if (playAgain) {
    const $banner = document.getElementById('banner');
    $banner.innerHTML = '';

    const $board = document.getElementById('board');
    const $columns = $board.childNodes;

    $columns.forEach(column => {
      const $squares = column.childNodes;

      $squares.forEach(div => {
        div.classList.remove('black', 'red');
        div.style.border = '';
      });
    });
    restart = true;
  }
}

var restart = false;
