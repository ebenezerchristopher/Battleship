
import columnPlacer from "../src/columnplacer.js"
import columnChecker from "../src/columnchecker.js"
import picker from "../src/picker.js"

let board = (function () {
  let board = Array.from(Array(10), (x) => [false, false, false, false, false, false, false, false, false, false])
  
  let id = 1;
  
  
  return {
    board,
    id
  }
})();

columnPlacer(board, 2,4)
picker(board, board, 2,4)
picker(board, board, 3,4)
picker(board , board, 4,4)
picker(board, board, 5,4)

test("just testing", () => {
  expect(columnChecker(board, 2,4)).toBe(true)
})