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

rowPlacer(board, 2, 4);
picker(board, board, 2, 4);
picker(board, board, 2, 5);
picker(board, board, 2, 6);
picker(board, board, 2, 7);
test("checking row match", () => {
  expect(rowChecker(board, 2, 4)).toBe(true);
});
