/**
190. Reverse Bits
https://leetcode.com/problems/reverse-bits/#/description

Reverse bits of a given 32 bits unsigned integer.

For example, given input 43261596 (represented in binary as 00000010100101000001111010011100),
return 964176192 (represented in binary as 00111001011110000010100101000000).

Follow up:
If this function is called many times, how would you optimize it?

Related problem: Reverse Integer
*/

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
const reverseBits = (n) => {
  const reversed = n.toString(2).split('').reverse();
  return parseInt(reversed.concat(Array(32 - reversed.length).fill('0')).join(''), 2);
};

console.log(reverseBits(1));
