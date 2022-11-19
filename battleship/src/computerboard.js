let computerBoard = (function () {
  let board = Array.from(Array(10), (x) => [false, false, false, false, false, false, false, false, false, false])
  let id = 2
  
  
  return {
    board, 
    id
  }
})();

export default computerBoard;