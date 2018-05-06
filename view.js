window.onload = function () {
  const $board = document.getElementById("board");

  for (let i = 0; i < 7; i++) {
    const $col = document.createElement('div');
    $col.setAttribute('class', 'col')
    $col.setAttribute('id', i);

    for (let j = 0; j < 6; j++) {
      const $square = document.createElement('div');
      $square.setAttribute('class', 'square')
      $square.setAttribute('id', '' + i + j);
      $col.appendChild($square);
    }
    $board.appendChild($col);
  }
  addColumnClickHandlers()
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