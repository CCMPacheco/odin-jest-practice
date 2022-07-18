function analyzeArray(array) {
  if (!Array.isArray(array)) return "Input must be an array";
  if (array.length === 0) return "Empty array";
  const onlyNumbers = array.filter(
    (number) => isNaN(number) || number == null || typeof number === "string"
  );
  if (onlyNumbers.length) return "Array must contain only numbers";

  const maxNumber = Math.max(...array);
  const minNumber = Math.min(...array);
  const lengthArray = array.length;
  const averageNumber =
    array.reduce((prev, curr) => (prev += curr), 0) / lengthArray;

  return {
    average: parseFloat(averageNumber.toFixed(3)),
    min: minNumber,
    max: maxNumber,
    length: lengthArray,
  };
}

export default analyzeArray;
