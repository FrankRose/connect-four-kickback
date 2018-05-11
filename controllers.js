const game = new Game();

function addColumnClickHandlers() {
  const $columns = document.getElementsByClassName('col');
  for (let $col of $columns) {
    $col.addEventListener('click', addPieces);
  }
}

function addPieces(clickEvent) {
  clickEvent.preventDefault();
  let square = clickEvent.target;
  let column = square.parentNode;

  if (Number.isInteger(parseInt(column.id))) {
    // console.log('Column clicked =', column.id);
    // console.log(column);
    // console.log('Square clicked =', square);
    // console.log(square);

    game.playTurn(column.id);
  }
}
