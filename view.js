window.onload = function () {
  let numCols = 7;
  let numRows = 6;

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