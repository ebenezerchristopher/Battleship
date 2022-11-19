let rowChecker = function (board, row, column) {
  
  if (column < 3) {
    let count = 0;
    let sunk = true;
    while (count <= 3) {
      if (!sunk) {
        return false;
      }
      if (board.board[row][column + count] === "x") {
        sunk = true;
        count += 1;
      } else {
        sunk = false;
        count += 1;
      }
    }
    return sunk;
  } else if (column > 6) {
    let count = 0;
    let sunk = true;
    while (count <= 3) {
      if (!sunk) {
        return false;
      }
      if (board.board[row][column - count] === "x") {
        sunk = true;
        count += 1;
      } else {
        sunk = false;
        count += 1;
      }
    }
    return sunk;
  } else {
    let countLeft = 0;
    let countRight = 0;
    let sunk = true;
    while (countLeft <= 3) {
      if (!sunk) {
        break;
      }
      if (board.board[row][column - countLeft] === "x") {
        sunk = true;
        countLeft += 1;
      } else {
        sunk = false;
        countLeft += 1;
      }
    }
    if (sunk) {
      return sunk;
    } else {
      sunk = true;
      while (countRight <= 3) {
        if (!sunk) {
          return false;
        }
        if (board.board[row][column + countRight] === "x") {
          sunk = true;
          countRight += 1;
        } else {
          sunk = false;
          countRight += 1;
        }
      }
    }
    return sunk;
  }
};

export default rowChecker;
