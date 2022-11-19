let playerBoard = (function () {
  let board = Array.from(Array(10), (x) => [false, false, false, false, false, false, false, false, false, false])
  
  let id = 1;
  
  
  return {
    board,
    id
  }
})();

export default playerBoard;