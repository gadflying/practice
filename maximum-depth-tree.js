/**
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/#/description
 *
 * Given a binary tree, find its maximum depth.
 *
 * The maximum depth is the number of nodes along the longest path from the
 * root node down to the farthest leaf node.
 *
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = root => (
  root === null
    ? 0
    : Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
);
