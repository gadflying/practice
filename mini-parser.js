/**
385. Mini Parser
https://leetcode.com/problems/mini-parser/#/description

Given a nested list of integers represented as a string, implement a parser to deserialize it.

Each element is either an integer, or a list -- whose elements may also be integers or other lists.

Note: You may assume that the string is well-formed:

String is non-empty.
String does not contain white spaces.
String contains only digits 0-9, [, - ,, ].
Example 1:

Given s = "324",

You should return a NestedInteger object which contains a single integer 324.
Example 2:

Given s = "[123,[456,[789]]]",

Return a NestedInteger object containing a nested list with 2 elements:

1. An integer containing value 123.
2. A nested list containing two elements:
    i.  An integer containing value 456.
    ii. A nested list with one element:
         a. An integer containing value 789.
**/

/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {string} s
 * @return {NestedInteger}
 */
 /* eslint-disable no-undef */
const deserialize = (s) => {
  const instructions = s.split('');
  const arrays = [];
  let integer = '';

  instructions.forEach((instruction) => {
    switch (instruction) {
      case '[':
        arrays.push(new NestedInteger());
        break;

      case ']': {
        if (integer) {
          arrays[arrays.length - 1].add(parseInt(integer, 10));
          integer = '';
        }

        if (arrays.length > 1) {
          const nestedInteger = arrays.pop();
          arrays[arrays.length - 1].getList().push(nestedInteger);
        }

        break;
      }

      case ',': {
        if (integer) {
          arrays[arrays.length - 1].add(parseInt(integer, 10));
          integer = '';
        }
        break;
      }

      case '-':
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        integer += instruction;
        break;

      default:
    }
  });

  if (integer) {
    const nestedInteger = new NestedInteger();
    nestedInteger.setInteger(parseInt(integer, 10));
    return nestedInteger;
  }

  return arrays.pop();
};

console.log(deserialize('324'));
console.log(deserialize('[123,[456,[789]]]'));
