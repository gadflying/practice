/**
* https://leetcode.com/problems/two-sum/#/description
*
* Given an array of integers, return indices of the two numbers
* such that they add up to a specific target.
* You may assume that each input would have exactly one solution,
* and you may not use the same element twice.
* ```*
* EXAMPLE:
* Given nums = [2, 7, 11, 15], target = 9,
*
* Because nums[0] + nums[1] = 2 + 7 = 9,
* return [0, 1].
* ```
**/

const twosumsF = (nums = [], target = 0) => {
  const indices = [];
  nums.forEach((num, index) => {
    nums.slice(index + 1).forEach((numB, indexB) => {
      if (num + numB === target) {
        indices.push(index);
        indices.push(indexB + index + 1);
      }
    });
  });

  return indices;
};

console.log(twosumsF([2, 7, 11, 15], 13));

const twosums = (nums = [], target = 0) => {
  for (let i = 0, max = nums.length; i < max; i += 1) {
    for (let j = i + 1; j < max; j += 1) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return [null, null];
};

console.log(twosums([2, 7, 11, 15], 9));

// Faster O(n)
const twosumsHash = (nums = [], target = 0) => {
  const diff = {};
  const max = nums.length;

  if (max < 2) {
    return nums;
  }

  for (let i = 0; i < max; i += 1) {
    const remainder = diff[target - nums[i]];
    if (remainder || remainder === 0) {
      return [remainder, i];
    } else if (!diff[nums[i]]) {
      diff[nums[i]] = i;
    }
  }

  return [null, null];
};

console.log(twosumsHash([2, 7, 11, 15], 9));
