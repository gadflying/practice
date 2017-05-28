/**
136. Single Number
https://leetcode.com/problems/single-number/#/description

Given an array of integers, every element appears twice except for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity.
Could you implement it without using extra memory?
**/

/**
 * @param {number[]} nums
 * @return {number}
 */
 /* eslint-disable no-param-reassign */
const singleNumber = (nums) => {
  const loneWolf = nums.reduce((memo, num, index) => {
    if (memo[num] !== undefined) {
      delete memo[num];
    } else {
      memo[num] = index;
    }

    return memo;
  }, {});

  return +(Object.keys(loneWolf)[0]);
};

console.log(singleNumber([2, 3, 4, 2, 3]));

/* eslint-disable no-bitwise */
const singleNumberXor = nums => nums.reduce((memo, curr) => memo ^ curr, 0);

console.log(singleNumberXor([2, 3, 4, 2, 3]));
