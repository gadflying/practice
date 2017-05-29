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
const calculate = (s) => {
  const add = [];
  const multiply = [];
  const subtract = [];
  const divide = [];

  let buffer = '';

  const commands = s.split('');

  commands.forEach((command) => {
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
        add.push(parseInt(buffer, 10));
        buffer = '';
        break;

      case '-':
        subtract.push(parseInt(buffer, 10));
        buffer = '';
        break;

      case '*':
        multiply.push(parseInt(buffer, 10));
        buffer = '';
        break;

      case '/':
        divide.push(parseInt(buffer, 10));
        buffer = '';
        break;

      default:
    }
  });

  let integer = parseInt(buffer, 10);

  integer = multiply.length ? multiply.shift() * integer : integer;
  integer = divide.length ? divide.shift() / integer : integer;
  integer = subtract.length ? subtract.shift() - integer : integer;
  integer = add.length ? add.shift() + integer : integer;

  return Math.trunc(integer);
};

console.log(calculate('3+2*2'));
console.log(calculate(' 3/2 '));
console.log(calculate(' 3+5 / 2 '));
console.log(calculate('1+1+1'));
