function capitalize(string) {
  if (!string.match(/[a-z]/i)) return "No valid characters";

  const array = string.split("");

  for (let i = 0; i < array.length; i++) {
    if (array[i].match(/[a-z]/i)) {
      array[i] = array[i].toUpperCase();
      return array.join("");
    }
  }
}

export default capitalize;
