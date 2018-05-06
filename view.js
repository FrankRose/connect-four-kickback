window.onload = function () {
  const $board = document.getElementById("board");

  for (let i = 0; i < 7; i++) {
    const $col = document.createElement('div');
    $col.setAttribute('class', 'col')
    $col.setAttribute('id', i);

    for (let j = 0; j < 6; j++) {
      const $slot = document.createElement('div');
      $slot.setAttribute('class', 'slot')
      $slot.setAttribute('id', '' + i + j);
      $col.appendChild($slot);
    }
    $board.appendChild($col);
  }
  addColumnClickHandlers()
}

function updateBoard(id) {
  id = id.slice(0, 1);
  const idx = game.matrix[id].length - 1;
  const $slot = document.getElementById('' + id + idx);
  if (game.isRed) {
    $slot.setAttribute('class', 'slot red');
  } else {
    $slot.setAttribute('class', 'slot black');
  }
}