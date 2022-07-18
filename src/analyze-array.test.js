import analyzeArray from "./analyze-array";

test("Check array of positive integers", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("Check array of integers", () => {
  expect(analyzeArray([1, -8, 3, -4, -2, 6])).toEqual({
    average: -0.667,
    min: -8,
    max: 6,
    length: 6,
  });
});

test("Check array of float", () => {
  expect(analyzeArray([1.5, -8.5, 3.5, -4.5, -2.5, 6.5])).toEqual({
    average: -0.667,
    min: -8.5,
    max: 6.5,
    length: 6,
  });
});

test("Check array of zeros", () => {
  expect(analyzeArray([0, 0, 0, 0, 0, 0])).toEqual({
    average: 0,
    min: 0,
    max: 0,
    length: 6,
  });
});

test("Check string input error", () => {
  expect(analyzeArray("odin-project")).toEqual("Input must be an array");
});

test("Check number input error", () => {
  expect(analyzeArray(123)).toEqual("Input must be an array");
});

test("Check null input error", () => {
  expect(analyzeArray(null)).toEqual("Input must be an array");
});

test("Check undefined input error", () => {
  expect(analyzeArray(undefined)).toEqual("Input must be an array");
});

test("Check object input error", () => {
  expect(analyzeArray({ one: 1, two: 2 })).toEqual("Input must be an array");
});

test("Check empty array error", () => {
  expect(analyzeArray([])).toEqual("Empty array");
});

test("Check array containing strings error", () => {
  expect(analyzeArray([1.2, "4", 3])).toEqual(
    "Array must contain only numbers"
  );
});

test("Check array containing null error", () => {
  expect(analyzeArray([1.2, 3, null])).toEqual(
    "Array must contain only numbers"
  );
});

test("Check array containing undefined error", () => {
  expect(analyzeArray([1.2, 3, undefined])).toEqual(
    "Array must contain only numbers"
  );
});

test("Check array containing arrays error", () => {
  expect(analyzeArray([[1.2, 3], 4, 3])).toEqual(
    "Array must contain only numbers"
  );
});
test("Check array containing objects error", () => {
  expect(analyzeArray([{ one: 1 }, 4, 3])).toEqual(
    "Array must contain only numbers"
  );
});
