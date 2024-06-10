import { initialize } from "./sdkInit.js";
import { sum } from "./utils.js";

window.addEventListener("pageshow", function () {
  console.log("The page was shown!", event);
});

var textSpan = document.querySelector("p span");
var kittenPic = document.querySelector("img");

var kittenClicks = 0;

kittenPic.addEventListener("click", function () {
  kittenClicks = kittenClicks + 1;
  console.log("You kitten clicked " + kittenClicks + " times!");
  textSpan.textContent = kittenClicks;
});

window.addEventListener("pagehide", () => {
  log("The page was hidden!");
});

export { initialize, sum };
