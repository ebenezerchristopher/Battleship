let columnPlacer = function (board, row, column) {
  //column -= 1;
  //row -= 1;
  let count = 0;
  let marked = [];

  while (count <= 3) {
    if (row > 6) {
      let row1 = row - count;
      if (board.board[row1][column]) {
        return marked;
      }
      board.board[row1][column] = true;
      marked.push([row1, column]);
      count += 1;
    } else {
      let row1 = row+count;
      if (board.board[row1][column]) {
        return marked;
      }
      board.board[row1][column] = true;
      marked.push([row1, column]);
      count += 1;
    }
  }

  return marked;
};

export default columnPlacer;
