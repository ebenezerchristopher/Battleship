import computerBoard from "./computerboard.js";
import playerBoard from "./playerboard.js";

import picker from "./picker.js";
import gridUpdate from "./gridupdate.js";

let player = (function () {
  let orient = ["column", "row"];

  function play(row, column) {
    let indicator = picker(computerBoard, playerBoard, row, column);

    gridUpdate(computerBoard, indicator, row, column);
  }

  return {
    play,
  };
})();
export default player;
