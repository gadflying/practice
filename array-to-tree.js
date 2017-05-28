/**
108. Convert Sorted Array to Binary Search Tree
https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/#/description

Given an array where elements are sorted in ascending order, convert it to a height balanced BST.
**/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const TreeNode = function TreeNode(val = null) {
  return {
    val,
    left: null,
    right: null,
  };
};

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = (nums) => {
  if (!nums || nums.length === 0) {
    return nums;
  }

  const mid = Math.floor(nums.length / 2);
  const node = new TreeNode(nums[mid]);

  const left = nums.slice(0, mid);
  const right = nums.slice(mid + 1, nums.length);

  if (left.length > 0) {
    node.left = sortedArrayToBST(left);
  }

  if (right.length > 0) {
    node.right = sortedArrayToBST(right);
  }

  return node;
};


console.log(JSON.stringify(sortedArrayToBST([1, 2, 3]), null, 2));
console.log(JSON.stringify(sortedArrayToBST([1, 2, 3, 4]), null, 2));
console.log(JSON.stringify(sortedArrayToBST([1, 2, 3, 4, 5, 6, 7]), null, 2));
