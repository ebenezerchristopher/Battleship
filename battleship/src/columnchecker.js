let columnChecker = function (board, row, column) {
 
  if (row < 3) {
    let count = 0;
    let sunk = true;
    while (count <= 3) {
      if (!sunk) {
        return false;
      }
      if (board.board[row + count][column] === "x") {
        sunk = true;
        count += 1;
      } else {
        sunk = false;
        count += 1;
      }
    }
    return sunk;
  } else if (row > 6) {
    
    let count = 0;
    let sunk = true;
    while (count <= 3) {
      if (!sunk) {
        return false;
      }
      if (board.board[row - count][column] === "x") {
        sunk = true;
        count += 1;
      } else {
        sunk = false;
        count += 1;
      }
    }
    return sunk;
  } else {
    
    let countUp = 0;
    let countDown = 0;
    let sunk = true;
    while (countUp <= 3) {
      if (!sunk) {
        break;
      }
      if (board.board[row - countUp][column] === "x") {
        sunk = true;
        countUp += 1;
      } else {
        sunk = false;
        countUp += 1;
      }
    }
    if (sunk) {
      return sunk;
    } else {
      sunk = true;
      while (countDown <= 3) {
        if (!sunk) {
          return false;
        }
        if (board.board[row + countDown][column] === "x") {
          sunk = true;
          countDown += 1;
        } else {
          sunk = false;
          countDown += 1;
        }
      }
    }
    return sunk;
  }
};

export default columnChecker;
