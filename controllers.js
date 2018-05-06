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
  let target = clickEvent.target;
  let parent = target.parentNode;

  if(Number.isInteger(parseInt(parent.id))) {
    // console.log(target.id);
    //  TODO: Change these methods to accept column id
    game.playTurn(target.id);
    updateBoard(target.id);
  }
}