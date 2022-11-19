let winTracker = (function () {
  let player1 = 0;
  let player2 = 0;

  let track = function (board) {
    if (board.id === 1) {
      player1 += 1;
    } else if (board.id === 2) {
      player2 += 1;
    }
    if (player1 === 3) {
      setTimeout(function () {
        alert("Hurray You Won");
      }, 1000);
    } else if (player2 === 3) {
      setTimeout(function () {
        alert("The Computer Wins");
      }, 1000);
    }
  };
  return {
    track,
  };
})();

export default winTracker;
