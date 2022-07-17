import calculator from "./calculator";

// Add tests
test("2 + 2 to 4", () => {
  expect(calculator.add(2, 2)).toBe(4);
});

test("-2 + 2 to 4", () => {
  expect(calculator.add(-2, 2)).toBe(0);
});

test("20.45 + 29.55 to 50", () => {
  expect(calculator.add(20.45, 29.55)).toBeCloseTo(50);
});

test("'ABC' + 2 to 'Invalid'", () => {
  expect(calculator.add("ABC", 2)).toBe("Invalid");
});

test("null + undefined", () => {
  expect(calculator.add(null, undefined)).toBe("Invalid");
});

// Substract tests
test("2 - 2 to 0", () => {
  expect(calculator.substract(2, 2)).toBe(0);
});

test("-2 - 2 to -4", () => {
  expect(calculator.substract(-2, 2)).toBe(-4);
});

test("20.45 - 29.55 to -9.1", () => {
  expect(calculator.substract(20.45, 29.55)).toBeCloseTo(-9.1);
});

test("'ABC' - 2 to 'Invalid'", () => {
  expect(calculator.substract("ABC", 2)).toBe("Invalid");
});

test("null + undefined", () => {
  expect(calculator.substract(null, undefined)).toBe("Invalid");
});

// Multiply tests
test("2 * 2 to 4", () => {
  expect(calculator.multiply(2, 2)).toBe(4);
});

test("-2 * 2 to -4", () => {
  expect(calculator.multiply(-2, 2)).toBe(-4);
});

test("20.45 * 29.55 to 604.2975", () => {
  expect(calculator.multiply(20.45, 29.55)).toBeCloseTo(604.2975);
});

test("'ABC' * 2 to 'Invalid'", () => {
  expect(calculator.multiply("ABC", 2)).toBe("Invalid");
});

test("null * undefined", () => {
  expect(calculator.multiply(null, undefined)).toBe("Invalid");
});

// Divide tests
test("2 / 2 to 1", () => {
  expect(calculator.divide(2, 2)).toBe(1);
});

test("-2 / 2 to -1", () => {
  expect(calculator.divide(-2, 2)).toBe(-1);
});

test("20.45 / 29.55 to 0.692", () => {
  expect(calculator.divide(20.45, 29.55)).toBeCloseTo(0.692);
});

test("'ABC' / 2 to 'Invalid'", () => {
  expect(calculator.divide("ABC", 2)).toBe("Invalid");
});

test("null / undefined", () => {
  expect(calculator.divide(null, undefined)).toBe("Invalid");
});

test("2 / 0 to 'Invalid'", () => {
  expect(calculator.divide(2, 0)).toBe("Invalid");
});

test("0 / 2 to 0", () => {
  expect(calculator.divide(0, 2)).toBe(0);
});
