let rowPlacer = function (board, row, column) {
  let marked = [];
  let count = 0;
  while (count <= 3) {
    if (column > 6) {
      let column1 = column - count;
      if (board.board[row][column1]) {
        return marked;
      }
      board.board[row][column1] = true;
      marked.push([row, column1]);
      count += 1;
    } else {
      let column1 = column + count;
      if (board.board[row][column1]) {
        return marked;
      }
      board.board[row][column1] = true;
      marked.push([row, column1]);
      count += 1;
    }
  }

  return marked;
};

export default rowPlacer;
