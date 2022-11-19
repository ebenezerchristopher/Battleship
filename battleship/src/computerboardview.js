import computerBoard from "./playerboard.js";
import columnPlacer from "./columnplacer.js";
import rowPlacer from "./rowplacer.js";
import player from "./player.js";
import computer from "./computer.js";

let computerBoardView = function () {
  let content = document.querySelector("#content");
  let computerGrid = document.createElement("div");
  computerGrid.className = "computergrid";

  for (let row in computerBoard.board) {
    for (let column in computerBoard.board[row]) {
      let div = document.createElement("div");
      div.setAttribute("data-row", row);
      div.setAttribute("data-column", column);

      div.addEventListener("click", (event) => {
        let row = Number(event.target.dataset.row);
        let column = Number(event.target.dataset.column);
        player.play(row, column);
        computer.play();
      });

      computerGrid.appendChild(div);
    }
  }
  
  return computerGrid;
};
export default computerBoardView;
