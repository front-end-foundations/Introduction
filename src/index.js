import { initialize } from "./init/sdkInit.js";
import { sum } from "./js/sum.js";

let foo = sum(1, 2);

export function add(a, b) {
  return a + b;
}
console.log("foo", foo);
