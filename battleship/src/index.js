import playerBoard from "./playerboard";
import columnPlacer from "./columnplacer";
import rowPlacer from "./rowplacer.js";
import picker from "./picker.js";
import "./index.css";
import playerBoardView from "./playerboardview";
import computerBoardView from "./computerboardview";
import computer from "./computer.js";

let mainContent = document.querySelector("#content");
let body = document.querySelector("body");
body.onload = (event) => {
  console.log("load");
  computer.initialize();
};
let playerText = document.createElement("div");
playerText.textContent = "Your Board";
playerText.className = "playertext";
let computerText = document.createElement("div");
computerText.textContent = "Computer Board";
computerText.className = "computertext";

let playerView = playerBoardView();
let computerView = computerBoardView();
mainContent.appendChild(playerView);
mainContent.appendChild(computerView);
mainContent.insertBefore(playerText, mainContent.children[0]);
mainContent.insertBefore(computerText, mainContent.children[3]);