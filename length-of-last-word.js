/**
https://leetcode.com/problems/length-of-last-word/

Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only.

For example, 
Given s = "Hello World",
return 5.
**/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
	if (!s || typeof s !== 'string') {
		return 0;
	}

	var parts = s.trim().split(' ');
	var last = parts[parts.length - 1];

	return last.length;
};

lengthOfLastWord('a ');  // => 1
lengthOfLastWord('last word  '); // => 4