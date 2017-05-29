/**
227. Basic Calculator II
https://leetcode.com/problems/basic-calculator-ii/#/description

Implement a basic calculator to evaluate a simple expression string.

The expression string contains only non-negative integers, +, -, *, / operators and empty spaces .
The integer division should truncate toward zero.

You may assume that the given expression is always valid.

Some examples:
"3+2*2" = 7
" 3/2 " = 1
" 3+5 / 2 " = 5
Note: Do not use the eval built-in library function.
**/

/**
 * @param {string} s
 * @return {number}
 */

 // This solution does not work
 /* eslint-disable no-restricted-properties */

/**
1. While there are still tokens to be read in,
   1.1 Get the next token.
   1.2 If the token is:
       1.2.1 A number: push it onto the value stack.
       1.2.5 An operator (call it thisOp):
         1 While the operator stack is not empty, and the top thing on the
           operator stack has the same or greater precedence as thisOp,
           1 Pop the operator from the operator stack.
           2 Pop the value stack twice, getting two operands.
           3 Apply the operator to the operands, in the correct order.
           4 Push the result onto the value stack.
         2 Push thisOp onto the operator stack.
2. While the operator stack is not empty,
    1 Pop the operator from the operator stack.
    2 Pop the value stack twice, getting two operands.
    3 Apply the operator to the operands, in the correct order.
    4 Push the result onto the value stack.
3. At this point the operator stack should be empty, and the value
   stack should have only one value in it, which is the final result.
**/

/**
 * @param {string} s
 * @return {number}
 */
const calculate2 = (s) => {
  const operands = [];
  const operators = [];
  let buffer = '';

  const tokens = s.split('');

  tokens.forEach((token) => {
    // if (digits[token]) {
    if (/[0-9]/.test(token)) {
      buffer += token;
    }

    if (/[/*\-+]/.test(token)) {
    // if (mdas[token]) {
      operands.push(parseInt(buffer, 10));
      buffer = '';
      if (operators.length === 0) {
        operators.push(token);
      } else {
        while (operators.length !== 0
          && (
            /[*/]/.test(operators[operators.length - 1])
            // md[operators[operators.length - 1]]
            || (/[+-]/.test(operators[operators.length - 1]) && /[+-]/.test(token))
            // || (as[operators[operators.length - 1]] && as[token])
          )
        ) {
          const operator = operators.pop();
          const [operand1, operand2] = operands.splice(-2, 2);
          if (operator === '/') {
            operands.push(Math.trunc(operand1 / operand2));
          } else if (operator === '*') {
            operands.push(operand1 * operand2);
          } else if (operator === '+') {
            operands.push(operand1 + operand2);
          } else if (operator === '-') {
            operands.push(operand1 - operand2);
          }
        }
        operators.push(token);
      }
    }
  });

  operands.push(parseInt(buffer, 10));
  buffer = '';

  while (operators.length !== 0) {
    const operator = operators.pop();
    const [operand1, operand2] = operands.splice(-2, 2);

    if (operator === '/') {
      operands.push(Math.trunc(operand1 / operand2));
    } else if (operator === '*') {
      operands.push(operand1 * operand2);
    } else if (operator === '+') {
      operands.push(operand1 + operand2);
    } else if (operator === '-') {
      operands.push(operand1 - operand2);
    }
  }
  return operands[0];
};

calculate2('1+1');

const calculate = (s) => {
  const operations = {
    '+': (o1, o2) => o1 + o2,
    '-': (o1, o2) => o1 - o2,
    '/': (o1, o2) => Math.trunc(o1 / o2),
    '*': (o1, o2) => o1 * o2,
  };

  const operands = [];
  const operators = [];
  let buffer = '';

  const tokens = s.split('');

  tokens.forEach((token) => {
    if (/[0-9]/.test(token)) {
      buffer += token;
    }

    if (/[/*\-+]/.test(token)) {
      // Flush buffer
      operands.push(parseInt(buffer, 10));
      buffer = '';

      // Empty stack
      if (operators.length === 0) {
        operators.push(token);
      } else {
        // Do higher precedence or same precedence operations first
        while (operators.length !== 0
          && (
            /[*/]/.test(operators[operators.length - 1])
            || (/[+-]/.test(operators[operators.length - 1]) && /[+-]/.test(token))
          )
        ) {
          const operator = operators.pop();
          const [operand1, operand2] = operands.splice(-2, 2);
          operands.push(operations[operator](operand1, operand2));
        }
        operators.push(token);
      }
    }
  });

  // Flush buffer
  operands.push(parseInt(buffer, 10));
  buffer = '';

  // Finish up operands
  while (operators.length !== 0) {
    const operator = operators.pop();
    const [operand1, operand2] = operands.splice(-2, 2);
    operands.push(operations[operator](operand1, operand2));
  }
  return operands[0];
};

console.log(calculate('3+2*2'));
console.log(calculate(' 3/2 '));
console.log(calculate(' 3+5 / 2 '));
console.log(calculate('1+1+1'));
console.log(calculate('3-2*2'));
console.log(calculate('3*2+2'));
console.log(calculate('3/2-2'));
console.log(calculate('1-1+1'));
console.log(calculate('1-1-1'));
console.log(calculate('1-1*2'));
console.log(calculate('14/3*2'));
console.log(calculate('14-3/2'));
console.log(calculate('1*2-3/4+5*6-7*8+9/10'));
