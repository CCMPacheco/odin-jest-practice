function reverseString(string) {
  if (!(typeof string === "string")) return "Not a string";
  return string.split("").reverse().join("");
}

export default reverseString;
