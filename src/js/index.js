import { initialize } from "./sdkInit.js";
import { sum } from "./utils.js";

var iFrameHead =
  window.frames["main-frame"].document.getElementsByTagName("head")[0];

function injectJS() {
  console.log(iFrameHead);
  var myscript = document.createElement("script");
  myscript.type = "text/javascript";
  myscript.src = "myscript.js"; // replace this with your SCRIPT
  iFrameHead.appendChild(myscript);
}

// frames[0].window.foo = function () {
//   console.log("Look at me, executed inside an iframe!", window);
// };

// iFrameHead.contentWindow.foo = function () {
//   console.log("Look at me, executed inside an iframe!");
// };

window.addEventListener("pagehide", () => {
  console.log("The page was hidden!");
});

window.addEventListener("pageshow", function (event) {
  console.log("The page was shown!", event);
});

window;

injectJS();

export { initialize, sum };
