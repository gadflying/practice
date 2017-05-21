/**
* https://leetcode.com/problems/reverse-integer/#/description
* Reverse digits of an integer.
* ```
* Example1: x = 123, return 321
* Example2: x = -123, return -321
* ```
**/

const reverse = (x) => {
  // eslint-disable-next-line no-restricted-properties
  const MAX_NUMBER = Math.pow(2, 31) - 1;
  const parsed = parseInt(`${Math.abs(x)}`.split('').reverse().join(''), 10) || 0;
  const reversed = parsed > MAX_NUMBER ? 0 : parsed;
  if (x < 0) {
    return reversed * -1;
  } else if (x >= 0) {
    return reversed;
  }

  return 0;
};

/* eslint-disable */
function reverseES5(x) {
  var MAX_NUMBER = Math.pow(2, 31) - 1;
  var parsed = parseInt((Math.abs(x) + '').split('').reverse().join(''), 10) || 0;
  var flipped = parsed > MAX_NUMBER ? 0 : parsed;
  if (x < 0) {
    return flipped * -1;
  } else if (x >= 0) {
    return flipped;
  }

  return 0;
}

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(Infinity));

console.log(reverseES5(123));
console.log(reverseES5(-123));
console.log(reverseES5(Infinity));
