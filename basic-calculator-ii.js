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
const calculate = (s) => {
  const add = [];
  let multiply = [];

  let unary = 1;
  let exponent = 1;
  let operator = '+';

  let buffer = '';

  const commands = s.split('');

  commands.concat('=').forEach((command) => {
    switch (command) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        buffer += command;
        break;

      case '+':
        add.push(
          multiply
            .concat(unary * Math.pow(parseInt(buffer, 10), exponent))
            .reduce((memo, num) => Math.trunc(memo * num), 1)
        );
        buffer = '';
        operator = '+';
        multiply = [];
        unary = 1;
        break;

      case '-':
        add.push(
          multiply
            .concat(unary * Math.pow(parseInt(buffer, 10), exponent))
            .reduce((memo, num) => Math.trunc(memo * num), 1)
        );
        buffer = '';
        operator = '-';
        multiply = [];
        unary = -1;
        break;

      case '*':
        multiply = [
          multiply
            .concat(unary * Math.pow(parseInt(buffer, 10), exponent))
            .reduce((memo, num) => Math.trunc(memo * num), 1)
        ];
        buffer = '';
        operator = '*';
        unary = 1;
        exponent = 1;
        break;

      case '/':
        multiply = [
          multiply
            .concat(unary * Math.pow(parseInt(buffer, 10), exponent))
            .reduce((memo, num) => Math.trunc(memo * num), 1)
        ];
        exponent = -1;
        buffer = '';
        operator = '/';
        break;

      case '=': {
        const integer = parseInt(buffer, 10);
        if (operator === '*') {
          multiply.push(integer);
          add.push(multiply.reduce((memo, num) => memo * num, 1));
        }

        if (operator === '/') {
          multiply.push(1 / integer);
          add.push(multiply.reduce((memo, num) => Math.trunc(memo * num), 1));
          exponent = 1;
        }

        if (operator === '+') {
          add.push(integer);
        }

        if (operator === '-') {
          add.push(-1 * integer);
          unary = 1;
        }

        buffer = '';
        break;
      }

      default:
    }
  });

  const result = add.reduce((memo, num) => memo + num, 0);

  return Math.trunc(result);
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
