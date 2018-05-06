/**
 * Represents game instance
 */
function Game() {
  this.matrix = [[], [], [], [], [], [], []];
  this.isRed = true;
  this.turn = 0;
  this.colors = ['red', 'black'];
  this.winner = undefined;
}

/*
  would check if its possible to drop a piece in a col
    if possible 
      runs dropPiece function
      change active turn
      and check winner
*/
Game.prototype.playTurn = function (squareId) {
  // console.log('Square ID:', squareId);

  let colId = squareId.slice(0, 1);
  // console.log('Col ID:', colId);

  colId = parseInt(colId);
  // console.log('Col ID (int):', colId);

  if (this.matrix[colId].length < 6) {
    this.turn++;
    
    console.log('Dropping piece');
    this.dropPiece(colId);

    this.updateBoard('' + colId);
  
    if (this.checkWinner(colId)) {
      console.log('We have a winner');
    }
    // this.isRed = !this.isRed;
  }
}

/*
  col -> index in the matrix

  check if verticalWin
  check if horizontalWin
  check if diagWinPart1
  check if diagWinPart2

  TODO
*/
Game.prototype.checkWinner = function (col) {
  return this.verticalWin(col) || this.horizontalWin(col) || this.diagonalWin(col);
}

Game.prototype.verticalWin = function (col) {
  if (this.matrix[col].length < 4) return false;

  let last4 = this.matrix[col].slice(-4);
  console.log(last4);
  
  return last4.every((val, i, arr) => arr[i] === arr[(i + 1) % arr.length]);;
}

/*
  check the length of the col
    get the index of the last item

  have a count of how many in a row init at zero  
  loop the matrix
    check at the index we saved
    if the piece at the index matches isRed increment counter
      if the count is at four return true
    else reset counter 
  
*/
Game.prototype.horizontalWin = function (col) {
  // const idx = this.matrix[col].length - 1;

  // let count = 0;
  // for (let i = 0; i < this.matrix.length; i++) {
  //   if (this.matrix[i][idx] === this.isRed) {
  //     count++;
  //     if (count === 4) return true;
  //   } else {
  //     count = 0;
  //   }
  // }
  return false;
}

Game.prototype.diagonalWin = function(col) {
  return false;
}

/*
  checks to see if the piece isRed
*/
Game.prototype.dropPiece = function (colId) {
  this.matrix[colId].push(this.isRed);
}

Game.prototype.resetGame = function () { }

Game.prototype.showWinningPieces = function () {}

Game.prototype.getCurrentColor = function() {
  return this.colors[this.turn % 2];
}

Game.prototype.updateBoard = function (squareId) {
  // console.log('Square ID:', squareId);

  const colId = squareId.slice(0, 1);
  // console.log('Column ID:', colId);
  
  const colIndx = game.matrix[colId].length - 1;
  // console.log('Column Index:', colIndx);

  const $square = document.getElementById('' + colId + colIndx);
  // console.log($square);

  if($square) {
    $square.setAttribute('class', `square ${game.getCurrentColor()}`);
  }
}