/*
2. Add Two Numbers
https://leetcode.com/problems/add-two-numbers/#/description

You are given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order and each of their nodes contain a single digit.
Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
*/

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

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  const lSum = new ListNode(0);

  let carry = 0;
  let p1 = l1;
  let p2 = l2;
  let pSum = lSum;

  while (p1 !== null || p2 !== null) {
    const value1 = p1 === null ? 0 : p1.val;
    const value2 = p2 === null ? 0 : p2.val;
    const sum = value1 + value2 + carry;
    const digit = sum % 10;
    carry = Math.floor(sum / 10);

    pSum.next = new ListNode(digit);
    pSum = pSum.next;

    p1 = p1 && p1.next;
    p2 = p2 && p2.next;
  }

  if (carry) {
    pSum.next = new ListNode(carry);
  }

  return lSum.next;
};

const l1 = (() => {
  const two = new ListNode(2);
  const four = new ListNode(4);
  const three = new ListNode(3);
  two.next = four;
  four.next = three;
  return two;
})();

const l2 = (() => {
  const five = new ListNode(5);
  const six = new ListNode(6);
  const four = new ListNode(4);
  five.next = six;
  six.next = four;
  return five;
})();

console.log(addTwoNumbers(l1, l2));
