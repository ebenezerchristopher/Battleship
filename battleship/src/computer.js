import computerBoard from "./computerboard.js";
import playerBoard from "./playerboard.js";
import columnPlacer from "./columnplacer.js";
import rowPlacer from "./rowplacer.js";
import picker from "./picker.js";
import gridUpdate from "./gridupdate.js";

let computer = (function () {
  let orient = ["column", "row"];

  function play() {
    let row = Math.round(Math.random() * 9);
    let column = Math.round(Math.random() * 9);
    let indicator = picker(playerBoard, computerBoard, row, column);

    gridUpdate(playerBoard, indicator, row, column);
  }

  function initialize() {
    let count = 0;
    while (count <= 3) {
      let index = Math.round(Math.random());
      let row = Math.round(Math.random() * 9);
      let column = Math.round(Math.random() * 9);

      if (orient[index] === "column") {
        columnPlacer(computerBoard, row, column);
      } else if (orient[index] === "row") {
        rowPlacer(computerBoard, row, column);
      }
        count += 1;
    }
    
  }
  return {
    play,
    initialize,
  };
})();
export default computer;
