import { sum, bestLaCroixFlavor } from "../js/utils.js";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("the page loads", () => {
  // expect(document.body.innerHTML).toContain("kitten");
});

test("TOBE - the best flavor is grapefruit", () => {
  expect(bestLaCroixFlavor()).toBe("grapefruit");
});
test("NOT - the best flavor is not coconut", () => {
  expect(bestLaCroixFlavor()).not.toBe("coconut");
});
test("RESOLVES to lemon", () => {
  // make sure to add a return statement
  return expect(Promise.resolve("lemon")).resolves.toBe("lemon");
});
test("RESOLVES to lemon alt", async () => {
  await expect(Promise.resolve("lemon")).resolves.toBe("lemon");
  await expect(Promise.resolve("lemon")).resolves.not.toBe("octopus");
});
test("REJECTS to octopus", () => {
  // make sure to add a return statement
  return expect(Promise.reject(new Error("octopus"))).rejects.toThrow(
    "octopus"
  );
});
