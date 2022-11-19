import rowPlacer from "../src/rowplacer.js";
import rowChecker from "../src/rowchecker.js";
import picker from "../src/picker.js";

let board = (function () {
  let board = Array.from(Array(10), (x) => [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  let id = 1;

  return {
    board,
    id,
  };
})();
rowPlacer(board, 2, 4)

test("checking row placements", () => {
  expect([board.board[2][7], board.board[2][6], board.board[2][5]]).toEqual([true, true, true]);
});
