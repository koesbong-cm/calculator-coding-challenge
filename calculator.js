function calculate(string) {
  var numbers = [];
  var hasOperator = false;

  if (string === undefined) {
    return 0;
  }

  let expressionArr = string.split(' ');

  for (let i = 0; i < expressionArr.length; i++) {
    if (!isNaN(parseFloat(expressionArr[i]))) {
      numbers.push(parseFloat(expressionArr[i]));
    } else {
      hasOperator = true;

      let last2Numbers = numbers.splice(-2);

      if (expressionArr[i] == '+') {
        numbers.push(last2Numbers[0] + last2Numbers[1]);
      } else if (expressionArr[i] == '-') {
        numbers.push(last2Numbers[0] - last2Numbers[1]);
      } else if (expressionArr[i] == '/') {
        numbers.push(last2Numbers[0] / last2Numbers[1]);
      } else if (expressionArr[i] == '*') {
        numbers.push(last2Numbers[0] * last2Numbers[1]);
      } else if(expressionArr[i] == '^') {
        numbers.push(last2Numbers[0] ** last2Numbers[1]);
      }
    }
  }

  if (hasOperator) {
    return numbers[0];
  } else {
    return numbers[numbers.length - 1];
  }
}
