function caesarCipher(string, key) {
  if (typeof string !== "string") return "Invalid input";
  if (isNaN(key)) return "Invalid key";
  if (!Number.isInteger(key)) return "Invalid key";
  if (key < 0) return "Invalid key";
  const formatedKey = key % 26;
  let cipherText = "";

  for (const char of string) {
    cipherText += rotate(char, formatedKey);
  }
  return cipherText;
}

function rotate(char, key) {
  if (!char.match(/[a-z]/i)) return char;
  if (isLower(char)) {
    let cipher = (char.charCodeAt() + key) % 123;
    if (cipher > 96 && cipher < 123) {
      return String.fromCharCode(cipher);
    } else {
      while (cipher < 0 || cipher > 25) {
        cipher = cipher % 26;
      }
      cipher += 97;
      return String.fromCharCode(cipher);
    }
  }
  if (isUpper(char)) {
    let cipher = (char.charCodeAt() + key) % 91;
    if (cipher > 64 && cipher < 91) {
      return String.fromCharCode(cipher);
    } else {
      while (cipher < 0 || cipher > 25) {
        cipher = cipher % 26;
      }
      cipher += 65;
      return String.fromCharCode(cipher);
    }
  }
}

function isLower(char) {
  return /[a-z]/.test(char);
}

function isUpper(char) {
  return /[A-Z]/.test(char);
}

export default caesarCipher;
