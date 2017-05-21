/**
* https://leetcode.com/problems/roman-to-integer/#/description
* Given a roman numeral, convert it to an integer.
* Input is guaranteed to be within the range from 1 to 3999.
**/

/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
  const ROMAN = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const SUBTRACT = {
    IV: -2,
    IX: -2,
    XL: -20,
    XC: -20,
    CD: -200,
    CM: -200,
  };

  let total = 0;
  for (let i = 0, max = s.length; i < max; i += 1) {
    total += (ROMAN[s[i]] || 0);
    if (i > 0 && s[i] !== 'I') {
      total += (SUBTRACT[`${s[i - 1]}${s[i]}`] || 0);
    }
  }

  return total;
};

console.log(romanToInt('IV'));
console.log(romanToInt('MCMLIV'));
