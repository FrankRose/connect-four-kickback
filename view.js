let numCols = 7;
let numRows = 6;

window.onload = function () {
  const $board = document.getElementById("board");

  for (let colId = 0; colId < numCols; colId++) {
    const $col = createColumn(colId);

    for (let rowId = 0; rowId < numRows; rowId++) {
      const $square = createSquare(colId, rowId);

      $col.appendChild($square);
    }
    $board.appendChild($col);
  }
  addColumnClickHandlers()
}

function createColumn(colId) {
  const $col = document.createElement('div');
  $col.setAttribute('class', 'col');
  $col.setAttribute('id', colId);

  return $col;
}

function createSquare(colId, rowId) {
  const $square = document.createElement('div');
  $square.setAttribute('class', 'square')
  $square.setAttribute('id', '' + colId + rowId);

  return $square;
}

function updateBoard(id) {
  id = id.slice(0, 1);
  const idx = game.matrix[id].length - 1;
  const $square = document.getElementById('' + id + idx);
  if (game.isRed) {
    $square.setAttribute('class', 'square red');
  } else {
    $square.setAttribute('class', 'square black');
  }
}