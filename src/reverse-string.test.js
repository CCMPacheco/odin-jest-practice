import reverseString from "./reverse-string";

test("'abc' to 'cba'", () => {
  expect(reverseString("abc")).toBe("cba");
});

test("'123' to '321'", () => {
  expect(reverseString("123")).toBe("321");
});

test("'a' to 'a'", () => {
  expect(reverseString("a")).toBe("a");
});

test("'abc defg hjkl' to 'lkjh gfed cba'", () => {
  expect(reverseString("abc defg hjkl")).toBe("lkjh gfed cba");
});

test("123 to Not a string", () => {
  expect(reverseString(123)).toBe("Not a string");
});

test("null to Not a string", () => {
  expect(reverseString(null)).toBe("Not a string");
});
