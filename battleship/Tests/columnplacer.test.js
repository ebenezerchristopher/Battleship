import columnPlacer from "../src/columnplacer.js";

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
columnPlacer(board, 2, 4);

test("checking column placements", () => {
  expect(board.board[5][4]).toEqual(true);
});
