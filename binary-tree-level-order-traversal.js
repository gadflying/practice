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

/** Only works for binary trees represented as arrays **/
/**
* @param {number[]} binary tree represented as an array
* @returns {number[][]}
**/
const levelOrder2 = (root = []) => {
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

console.log(levelOrder2([]));
console.log(levelOrder2([2, null, 1]));
console.log(levelOrder2([3, 9, 20, null, null, 15, 7]));
console.log(levelOrder2([3, 9, 7, 4, null, 1, 2, null, null, null, null, null, null, null, 5]));

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
/* eslint-disable no-param-reassign */
const levelOrder = (root) => {
  const levelOrderDeep = (left, right, height, levels) => {
    const nextHeight = height + 1;
    if (left) {
      levels[nextHeight] = (levels[nextHeight] || []).concat(left.val);
      levelOrderDeep(left.left, left.right, nextHeight, levels);
    }

    if (right) {
      levels[nextHeight] = (levels[nextHeight] || []).concat(right.val);
      levelOrderDeep(right.left, right.right, nextHeight, levels);
    }

    return levels;
  };

  if (root === null) {
    return [];
  }

  return levelOrderDeep(root.left, root.right, 0, [[root.val]]);
};

console.log(levelOrder([]));
