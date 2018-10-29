# Calculator Coding Challenge

In this repository, you will find the code that evaluates a string expression and performs mathematic operations, as well as a test suite that validates its current functionalities.

Here is how it works:

* The expressions are numbers and operators
* The expression can have a float number
* Valid operations are `+, -, *, and /`
* An empty expression should evaluate to 0
* It goes through the expression left to right and keeps track of the numbers
* When it comes to an operator, it applies the operator to the previous two numbers, and replaces them with the result
* If there are no operations in the input expression, it returns the last value of the expression
* There are always spaces between numbers and operations, e.g. '1 3 +' is valid, but '1 3+' isn't
* There won't be exceptional situations like applying operators without enough numbers

Examples:

* '3 2 1 - *', which is equivalent to `3 * (2 - 1)`, should evaluate to `3`
* '7 4 5 + * 3 - 10 /' , which is equivalent to `(7 * (4 + 5) - 3) / 10`, should evaluate to `6`
* '1 3 4', should evaluate to `4`

There are a couple of required tasks for you to do here:

* We think that the code in `calculator.js` can be made cleaner, we'd love to see how you would refactor it
* Please add the following requirements:
  - if the expression starts with an operator or only contains operators, return 0
  - if it's a division by zero situation, return 0
  - add support for `squared` operation, e.g. `'2 3 ^'` = `2 ^ 3`

Bonus tasks if time allows:

* Suggest/Add new product improvements
* Improve the test suites

For these tasks, we would like for you to timebox your effort to 2 hours at the most.
