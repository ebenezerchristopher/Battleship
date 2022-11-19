import playerBoard from "./playerboard.js";
import columnPlacer from "./columnplacer.js";
import rowPlacer from "./rowplacer.js";
import gridUpdate from "./gridupdate.js";
import styler from "./styler.js";

let playerBoardView = function () {
  let content = document.querySelector("#content");
  let playerGrid = document.createElement("div");
  playerGrid.className = "playergrid";
  //grid-row toggler
  let columnRow = document.createElement("div");
  columnRow.className = "column";
  columnRow.textContent = "C";
  columnRow.addEventListener("click", (event) => {
    if (event.target.className === "column") {
      event.target.className = "row";
      event.target.textContent = "R";
    } else if (event.target.className === "row") {
      event.target.className = "column";
      event.target.textContent = "C";
    }
  });
  content.appendChild(columnRow);

  for (let row in playerBoard.board) {
    for (let column in playerBoard.board[row]) {
      let div = document.createElement("div");
      div.setAttribute("data-row", row);
      div.setAttribute("data-column", column);

      div.addEventListener("click", (event) => {
        let row = Number(event.target.dataset.row);
        console.log(row);
        let column = Number(event.target.dataset.column);
        if (columnRow.className === "column") {
          styler(columnPlacer(playerBoard, row, column), "column");
        } else if (columnRow.className === "row") {
          styler(rowPlacer(playerBoard, row, column), "row");
        }
      });

      playerGrid.appendChild(div);
    }
  }
  return playerGrid;
};
export default playerBoardView;
