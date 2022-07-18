import caesarCipher from "./caesar-cipher";

test("check key positive integer", () => {
  expect(caesarCipher("defend the east wall of the castle", 1)).toBe(
    "efgfoe uif fbtu xbmm pg uif dbtumf"
  );
});

test("check key negative integer", () => {
  expect(caesarCipher("abcdefghijklmnopqrstuvwxyz", -1)).toBe("Invalid key");
});

test("check key float", () => {
  expect(caesarCipher("abcdefghijklmnopqrstuvwxyz", 1.5)).toBe("Invalid key");
});

test("check input is string", () => {
  expect(caesarCipher(123, 1)).toBe("Invalid input");
});

test("check key equals to 0", () => {
  expect(caesarCipher("abcdefghijklmnopqrstuvwxyz", 0)).toBe(
    "abcdefghijklmnopqrstuvwxyz"
  );
});

test("check key greater than 26", () => {
  expect(caesarCipher("AbCdeFgH", 999)).toBe("LmNopQrS");
});

test("String upper case", () => {
  expect(caesarCipher("ABCDEFGH", 20)).toBe("UVWXYZAB");
});

test("String lower case", () => {
  expect(caesarCipher("abcdefgh", 20)).toBe("uvwxyzab");
});

test("String upper and lower case", () => {
  expect(caesarCipher("AbCdeFgH", 20)).toBe("UvWxyZaB");
});

test("String only symbols", () => {
  expect(caesarCipher("@#$%^&*", 20)).toBe("@#$%^&*");
});

test("String numbers, letters, upper case and lower case, and symbols", () => {
  expect(caesarCipher("123abcDEFG@#$%^&*", 20)).toBe("123uvwXYZA@#$%^&*");
});

test("check null key", () => {
  expect(caesarCipher("123abcDEFG@#$%^&*", null)).toBe("Invalid key");
});

test("check null input and null key", () => {
  expect(caesarCipher(null, null)).toBe("Invalid input");
});
