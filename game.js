/**
 * Represents game instance
 */
function Game() {
  this.matrix = [[], [], [], [], [], [], []];
  this.isRed = false;
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
  let colId = squareId.slice(0, 1);
  colId = parseInt(colId);

  if (this.matrix[colId].length < 6) {
    this.turn++;
    
    this.dropPiece(colId);
    this.updateBoard('' + colId);
  
    if (this.checkWinner(colId)) {
      console.log('We have a winner');
    }
    this.isRed = !this.isRed;
  }
}

Game.prototype.checkWinner = function (col) {
  return this.verticalWin(col) || this.horizontalWin(col) || this.diagonalWin(col);
}

Game.prototype.verticalWin = function (colId) {
  if (this.matrix[colId].length < 4) return false;

  let last4 = this.matrix[colId].slice(-4);
  
  return this.checkSpacesForWin(last4);
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
  let rowIndex = this.matrix[col].length - 1;
  let row = this.matrix.map(column => column[rowIndex]);

  let minIndex = Math.max(col - 3, 0);
  let maxIndex = Math.min(col + 3, 6);

  if (maxIndex - minIndex >= 3) {
    for (let i = minIndex; i <= maxIndex - 3; i++) {
      let squares = row.slice(i, i + 4);
      
      if (this.checkSpacesForWin(squares)) return true;
    }
  }

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

Game.prototype.resetGame = function () { };

Game.prototype.showWinningPieces = function (squares) {};

Game.prototype.getCurrentColor = function() {
  return this.colors[this.turn % 2];
};

Game.prototype.updateBoard = function (squareId) {
  const colId = squareId.slice(0, 1);
  const colIndx = game.matrix[colId].length - 1;
  const $square = document.getElementById('' + colId + colIndx);

  if($square) {
    $square.setAttribute('class', `square ${game.getCurrentColor()}`);
  }
};

Game.prototype.checkSpacesForWin = function(squares) {
  let gameIsWon = squares.every((val, i, arr) => arr[i] === arr[(i + 1) % arr.length]);
  
  if (gameIsWon) {
    this.showWinningPieces(squares);
  }

  return gameIsWon;
};

Game.prototype.gameOver = function() {};