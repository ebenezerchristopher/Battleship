let styler = function (arr, orient) {
  if (arr.length > 0) {
    if (orient === "column") {
    for (let e =0;e<arr.length;e++) {
      console.log(e);
      let row = arr[e][0];
      let column = arr[e][1];
      let element = document.querySelector(
        `div[data-row='${row}'][data-column='${column}']`
      );
      if (e === 0) {
        element.classList.add("bordertop");
      }
      if (e === 3) {
        element.classList.add("borderbottom");
      }
      element.classList.add("blueborder");
    }
  } else if (orient === "row") {
    for (let e =0;e<arr.length;e++) {
      console.log(e);
      let row = arr[e][0];
      let column = arr[e][1];
      let element = document.querySelector(
        `div[data-row='${row}'][data-column='${column}']`
      );
      if (e === 0) {
        element.classList.add("borderleft");
      }
      if (e === 3) {
        element.classList.add("borderright");
      }
      element.classList.add("bluebordertop");
    }
  }
  }
};
export default styler;
