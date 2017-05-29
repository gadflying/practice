/**
415. Add Strings
https://leetcode.com/problems/add-strings/#/description

Given two non-negative integers num1 and num2 represented as string,
return the sum of num1 and num2.

Note:
The length of both num1 and num2 is < 5100.
Both num1 and num2 contains only digits 0-9.
Both num1 and num2 does not contain any leading zero.
You must not use any built-in BigInteger library or convert the inputs to integer directly.
**/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const addStrings = (num1, num2) => {
  const maxLength = Math.max(num1.length, num2.length);
  const num1Reversed = num1.split('').slice().reverse();
  const num2Reversed = num2.split('').slice().reverse();

  let sum = '';
  let carry = 0;

  for (let i = 0; i < maxLength; i += 1) {
    const num1Digit = (num1Reversed[i] || '0').charCodeAt() - 48;
    const num2Digit = (num2Reversed[i] || '0').charCodeAt() - 48;

    const total = num1Digit + num2Digit + carry;
    sum = (total % 10) + sum;
    carry = Math.floor(total / 10);
  }

  if (carry > 0) {
    sum = carry + sum;
  }

  return sum;
};

console.log(addStrings('9999999999999999999999', '999999999999999999999999999999999999999999'));
