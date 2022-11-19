let gridUpdate = function (board, indicator, row, column) {
  if (board.id === 1) {
    if (indicator) {
      let element = document.querySelector(
        `.playergrid>div[data-row='${row}'][data-column='${column}']`
      );
      element.textContent = "X";
    } else if (indicator === null) {
      let element = document.querySelector(
        `.playergrid>div[data-row='${row}'][data-column='${column}']`
      );
      element.style.backgroundColor = "lightgrey";
    }
  } else if (board.id === 2) {
    if (indicator) {
      let element = document.querySelector(
        `.computergrid>div[data-row='${row}'][data-column='${column}']`
      );
      element.textContent = "X";
    } else if (indicator === null) {
      let element = document.querySelector(
        `.computergrid>div[data-row='${row}'][data-column='${column}']`
      );
      element.style.backgroundColor = "lightgrey";
    }
  }
};
export default gridUpdate;
