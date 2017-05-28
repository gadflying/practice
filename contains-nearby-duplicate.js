/**
219. Contains Duplicate II
https://leetcode.com/problems/contains-duplicate-ii/#/description

Given an array of integers and an integer k, find out whether there are two distinct indices
i and j in the array such that nums[i] = nums[j] and the absolute difference between i
and j is at most k.
**/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = (nums, k) => {
  const cache = [];
  return nums.some((integer, key) => {
    if (cache[integer] !== undefined && Math.abs(cache[integer] - key) <= k) {
      return true;
    }
    cache[integer] = key;
    return false;
  });
};

console.log(containsNearbyDuplicate([2, 3, 4, 5, 2], 2));
