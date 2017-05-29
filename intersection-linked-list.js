/**
160. Intersection of Two Linked Lists
https://leetcode.com/problems/intersection-of-two-linked-lists/#/description

Write a program to find the node at which the intersection of two singly linked lists begins.

For example, the following two linked lists:

A:          a1 → a2
                   ↘
                     c1 → c2 → c3
                   ↗
B:     b1 → b2 → b3
begin to intersect at node c1.

Notes:

If the two linked lists have no intersection at all, return null.
The linked lists must retain their original structure after the function returns.
You may assume there are no cycles anywhere in the entire linked structure.
Your code should preferably run in O(n) time and use only O(1) memory.
**/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const nodeA = new ListNode(1);
const node2 = new ListNode(2);
const nodeC = new ListNode(3);

nodeA.next = nodeC;
node2.next = nodeC;

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode2 = (headA, headB) => {
  if (!headA || !headB) {
    return null;
  }

  const nodes = {};
  let node = headA;
  while (node !== null) {
    nodes[node.val] = node;
    node = node.next;
  }

  let nodeB = headB;
  while (nodeB !== null) {
    if (nodes[nodeB.val] !== undefined) {
      return nodeB;
    }

    nodeB = nodeB.next;
  }

  return null;
};

console.log(getIntersectionNode2(nodeA, node2));

const getIntersectionNode = (headA, headB) => {
  if (!headA || !headB) {
    return null;
  }

  let pA = headA;
  let pB = headB;
  let switchedA = false;
  let switchedB = false;

  while (pA !== pB) {
    if (pA === null && !switchedA) {
      pA = headB;
      switchedA = true;
    } else if (pA !== null) {
      pA = pA.next;
    }

    if (pB === null && !switchedB) {
      pB = headA;
      switchedB = true;
    } else if (pB !== null) {
      pB = pB.next;
    }
  }

  return pA;
};

console.log(getIntersectionNode(nodeA, node2));
