import capitalize from "./capitalize";

test("odin to Odin", () => {
  expect(capitalize("odin")).toBe("Odin");
});

test("Odin to Odin", () => {
  expect(capitalize("Odin")).toBe("Odin");
});

test("ODIN to ODIN", () => {
  expect(capitalize("ODIN")).toBe("ODIN");
});

test("odin project to Odin project", () => {
  expect(capitalize("odin project")).toBe("Odin project");
});

test("123 to No valid characters", () => {
  expect(capitalize("123")).toBe("No valid characters");
});

test("-.@$%# to No valid characters", () => {
  expect(capitalize("123")).toBe("No valid characters");
});

test("123abc to 123Abc", () => {
  expect(capitalize("123abc")).toBe("123Abc");
});

test("@$%#abc123abc to @$%#Abc123abc", () => {
  expect(capitalize("@$%#abc123abc")).toBe("@$%#Abc123abc");
});
