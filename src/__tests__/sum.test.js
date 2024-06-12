import { sum, bestFlavor, forEach } from "../js/utils.js";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("the page loads", () => {
  // expect(document.body.innerHTML).toContain("kitten");
});

test("TOBE - the best flavor is grapefruit", () => {
  expect(bestFlavor()).toBe("grapefruit");
});
test("NOT - the best flavor is not coconut", () => {
  expect(bestFlavor()).not.toBe("coconut");
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

const mockCallback = jest.fn((x) => 42 + x);

test("forEach mock function", () => {
  forEach([0, 1], mockCallback);

  // The mock function was called twice
  expect(mockCallback.mock.calls).toHaveLength(2);

  // The first argument of the first call to the function was 0
  expect(mockCallback.mock.calls[0][0]).toBe(0);

  // The first argument of the second call to the function was 1
  expect(mockCallback.mock.calls[1][0]).toBe(1);

  // The return value of the first call to the function was 42
  expect(mockCallback.mock.results[0].value).toBe(42);
});
