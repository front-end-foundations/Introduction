function sum(a, b) {
  return a + b;
}

function bestFlavor() {
  return "grapefruit";
}
function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

export { sum, bestFlavor, forEach };
