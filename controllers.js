const game = new Game();
// console.log(0)

function addColumnClickHandlers() {
  const $columns = document.getElementsByClassName('col');
  for (let $col of $columns) {
    // console.log('hey?')
    $col.addEventListener('click', function (e) {
      e.preventDefault();
      // console.log('hello', e.target.id)
      const id = e.target.id;
      game.playTurn(id);
      updateBoard(id);
    });
  }
}