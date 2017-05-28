/**
217. Contains Duplicate
https://leetcode.com/problems/contains-duplicate/#/description

Given an array of integers, find if the array contains any duplicates. Your function should return
true if any value appears at least twice in the array, and it should return false if every element
is distinct.
**/

/**
 * @param {number[]} nums
 * @return {boolean}
 */

/* eslint-disable no-bitwise */
const containsDuplicate = (nums) => {
  const cache = {};
  return nums.some((num, index) => {
    if (cache[num] !== undefined) {
      return true;
    }

    cache[num] = index;
    return false;
  });
};

console.log(containsDuplicate([1, 2, 3]));
console.log(containsDuplicate([1, 2, 2]));
