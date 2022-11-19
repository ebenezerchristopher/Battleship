import rowPlacer from "../src/rowplacer.js";

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
rowPlacer(board, 2, 4);
picker(board, board, 2, 5);
test("places x at the right spot", () => {
  expect(board.board[2][5]).toEqual("x");
});
