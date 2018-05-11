function Game() {
  this.matrix = [[], [], [], [], [], [], []];
  this.isRed = false;
  this.turn = 0;
  this.colors = ['red', 'black'];
  this.winner = undefined;
  this.winningSquares = [];
  this.gameHasEnded = false;
}

//  TODO: change this to accept the column id
Game.prototype.playTurn = function(column) {
  let columnId = this.getColumnId(column);

  if (this.matrix[columnId].length < 6) {
    this.turn++;

    this.dropPiece(column);
    this.isRed = !this.isRed;

    if (this.checkWinner(columnId)) {
      console.log('We have a winner');
      this.gameOver();
    }
  }
};

Game.prototype.getColumnId = function(column) {
  return parseInt(column.id);
};

//  TODO: Verify this function
Game.prototype.getSquareId = function(column) {
  let colId = this.getColumnId(column);
  let sqIndex = this.matrix[colId].length;

  return `${colId}${sqIndex}`;
};

Game.prototype.dropPiece = function(column) {
  let colId = this.getColumnId(column);

  let square = document.getElementById(this.getSquareId(column));

  square &&
    square.setAttribute(
      'class',
      `${square.getAttribute('class')} ${this.getCurrentColor()}`
    );

  this.matrix[colId].push(square);
};

Game.prototype.checkWinner = function(col) {
  return (
    this.verticalWin(col) || this.horizontalWin(col) || this.diagonalWin(col)
  );
};

Game.prototype.verticalWin = function(colId) {
  if (this.matrix[colId].length < 4) return false;

  let last4 = this.matrix[colId].slice(-4);

  return this.checkSpacesForWin(last4);
};

Game.prototype.horizontalWin = function(col) {
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
};

Game.prototype.diagonalWin = function(colIndex) {
  let rowIndex = this.matrix[colIndex].length - 1;
  let square = [colIndex, rowIndex];
  let slash = this.getSlash(colIndex - rowIndex);
  let bkSlash = this.getBackslash(colIndex + rowIndex);

  for (let col = 0; col < 4; col++) {
    let slashSquares = slash.slice(col, col + 4);
    let bkSlashSquares = bkSlash.slice(col, col + 4);

    if (
      this.checkSpacesForWin(slashSquares) ||
      this.checkSpacesForWin(bkSlashSquares)
    ) {
      return true;
    }
  }

  return false;
};

Game.prototype.getSlash = function(difference) {
  let slash = [];

  for (let x = 0; x < 7; x++) {
    let y = (difference - x) * -1;
    if (y >= 0 && y < 6) {
      slash.push(this.matrix[x][y]);
    }
  }

  return slash;
};

Game.prototype.getBackslash = function(sum) {
  let backslash = [];

  for (let x = 0; x < 7; x++) {
    let y = sum - x;
    if (y >= 0 && y < 6) {
      backslash.push(this.matrix[x][y]);
    }
  }

  return backslash;
};

Game.prototype.getCurrentColor = function() {
  return this.colors[this.turn % 2];
};

Game.prototype.checkSpacesForWin = function(squares) {
  if (squares.length < 4) {
    return false;
  }

  let fourInRow = squares.every(
    (val, i, arr) =>
      arr[i].getAttribute('class') ===
      arr[(i + 1) % arr.length].getAttribute('class')
  );

  let allUndefined = squares.every(elem => elem === undefined);

  let gameOver = fourInRow && !allUndefined;

  if (gameOver) {
    showWinningPieces(squares);
    showWinner(this.getCurrentColor());
  }

  return gameOver;
};

Game.prototype.gameOver = function() {
  this.matrix = [[], [], [], [], [], [], []];
  this.isRed = false;
  this.gameHasEnded = true;
};
