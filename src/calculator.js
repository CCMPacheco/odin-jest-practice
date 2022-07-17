class Calculator {
  add(firstNum, secondNum) {
    if (isNaN(firstNum) || isNaN(secondNum)) return "Invalid";
    return firstNum + secondNum;
  }

  substract(firstNum, secondNum) {
    if (isNaN(firstNum) || isNaN(secondNum)) return "Invalid";
    return firstNum - secondNum;
  }

  multiply(firstNum, secondNum) {
    if (isNaN(firstNum) || isNaN(secondNum)) return "Invalid";
    return firstNum * secondNum;
  }

  divide(firstNum, secondNum) {
    if (isNaN(firstNum) || isNaN(secondNum)) return "Invalid";
    if (secondNum === 0) return "Invalid";
    return firstNum / secondNum;
  }
}

const calculator = new Calculator();

export default calculator;
