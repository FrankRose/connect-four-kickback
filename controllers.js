const game = new Game();
// console.log(0)

function addColumnClickHandlers() {
  const $columns = document.getElementsByClassName('col');
  for (let $col of $columns) {
    // $col.addEventListener('click', function (square) {
    //   square.preventDefault();
    //   console.log(square);

    //   if (square.target.parentNode.id === 'board') {
    //     return;
    //   }

    //   const colId = square.target.parentNode.id;
    //   game.playTurn(colId);
    //   updateBoard(colId);
    // });
    $col.addEventListener('click', addPieces);
  }
}

function addPieces(clickEvent) {
  clickEvent.preventDefault();
  let square = clickEvent.target;
  let column = square.parentNode;

  if(Number.isInteger(parseInt(column.id))) {
    // console.log(target.id);
    //  TODO: Change these methods to accept column id
    game.playTurn(square.id);
    // updateBoard(square.id);
  }
}