/**
20. Valid Parentheses
https://leetcode.com/problems/valid-parentheses/#/description

Given a string containing just the characters '(', ')', '{', '}', '[' and ']',
determine if the input string is valid.

The brackets must close in the correct order, "()" and "()[]{}" are all valid
but "(]" and "([)]" are not.
**/

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid2 = (s) => {
  const stack = [];
  const actions = {
    '(': () => !!stack.push('('),
    '{': () => !!stack.push('{'),
    '[': () => !!stack.push('['),
    ')': () => stack.pop() === '(',
    '}': () => stack.pop() === '{',
    ']': () => stack.pop() === '[',
  };

  const result = !s.split('').some(char => !actions[char]());
  return result && stack.length === 0;
};

// slower
isValid2();

const isValid = (s) => {
  const partners = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  const stack = [];

  const valid = !s.split('').some((char) => {
    const partner = partners[char];
    return !(partner ? stack.push(partner) : stack.pop() === char);
  });

  return valid && stack.length === 0;
};

console.log('isValid', isValid('('));
console.log('isValid', isValid('()'));
console.log('isValid', isValid('({}'));
console.log('isValid', isValid('([[]])'));
console.log('isValid', isValid('({[]})'));
console.log('isValid', isValid(']'));
