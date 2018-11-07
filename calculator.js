function calculate(string) {
  if (isInvalidExpression(string)) {
    return 0;
  }

  let numbers = [];
  let hasOperator = false;
  let expressionArr = string.split(' ');

  for (let i = 0; i < expressionArr.length; i++) {
    if (!isNaN(parseFloat(expressionArr[i]))) {
      numbers.push(parseFloat(expressionArr[i]));
    } else {
      hasOperator = true;
      let last2Numbers = numbers.splice(-2);

      numbers.push(operate(...last2Numbers, expressionArr[i]));
    }
  }

  if (hasOperator) {
    return numbers[0];
  } else {
    return numbers[numbers.length - 1];
  }
}

function isInvalidExpression(string) {
  return !string || string.length < 1 || isNaN(string[0]);
}

function operate(value1, value2, operator) {
  switch(operator) {
    case '+':
      return value1 + value2;
    case '-':
      return value1 - value2;
    case '/':
      return (value2 == 0) ? 0 : value1 / value2;
    case '*':
      return value1 * value2;
    case '^':
      return value1 ** value2;
  }
}

// Improvements:
// * An empty expression should evaluate to 0: bug fixed with ''
// * Return NaN for divisions by 0
// * Make test suite one expectation per test
// * Improve readme with test instructions


