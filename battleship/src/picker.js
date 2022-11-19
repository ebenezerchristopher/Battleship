import columnChecker from "./columnchecker.js";
import rowChecker from "./rowchecker.js";
import winTracker from "./wintracker.js";

let picker = function (board, board2, row, column) {
  //row -= 1;
  //column -= 1;
  let indicator;

  if (board.board[row][column] === true) {
    board.board[row][column] = "x";
    indicator = true;
  } else if (board.board[row][column] === "x") {
    indicator = false;
  } else {
    indicator = null;
  }

  if (indicator) {
    let columnSink;
    let rowSink;
    columnSink = columnChecker(board, row, column);
    rowSink = rowChecker(board, row, column);
    

    if (columnSink || rowSink) {
      winTracker.track(board2);
    }
  }

  return indicator;
};

export default picker;
