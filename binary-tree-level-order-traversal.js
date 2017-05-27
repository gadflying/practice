 /* eslint-disable no-restricted-properties */

/**
* 102. Binary Tree Level Order Traversal
* https://leetcode.com/problems/binary-tree-level-order-traversal/#/description
* Given a binary tree, return the level order traversal of its nodes' values.
(ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],


    3
   / \
  9  20
    /  \
  15    7

OUTPUT
[
  [3],
  [9,20],
  [15,7]
]
**/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */


/** Only works for binary trees represented as arrays **/
const levelOrder = (root = []) => {
  const traversal = [];
  const getStartIndex = height => Math.pow(2, height) - 1;

  let h = 0;
  let startIndex = getStartIndex(h);

  while (startIndex < root.length) {
    const level = root.slice(startIndex, getStartIndex(h + 1)).filter(Number.isFinite);
    traversal.push(level);
    h += 1;
    startIndex = getStartIndex(h);
  }

  return traversal;
};

console.log(levelOrder([]));
console.log(levelOrder([2, null, 1]));
console.log(levelOrder([3, 9, 20, null, null, 15, 7]));
console.log(levelOrder([3, 9, 7, 4, null, 1, 2, null, null, null, null, null, null, null, 5]));
