/**
68. Text Justification
https://leetcode.com/problems/text-justification/#/description

Given an array of words and a length L, format the text such that each line has exactly L
characters and is fully (left and right) justified.

You should pack your words in a greedy approach; that is, pack as many words as you can in each
line. Pad extra spaces ' ' when necessary so that each line has exactly L characters.

Extra spaces between words should be distributed as evenly as possible. If the number of spaces
on a line do not divide evenly between words, the empty slots on the left will be assigned more
spaces than the slots on the right.

For the last line of text, it should be left justified and no extra space is inserted between words.

For example,
words: ["This", "is", "an", "example", "of", "text", "justification."]
L: 16.

Return the formatted lines as:
[
   "This    is    an",
   "example  of text",
   "justification.  "
]
Note: Each word is guaranteed not to exceed L in length.
**/

/* eslint-disable no-param-reassign */
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
const fullJustify = (words, maxWidth) => {
  // Break up words into lines
  const allLines = words.reduce((lines, word) => {
    // Get the last line
    const lastLine = lines[lines.length - 1] || [];

    // Extend the previous line
    const nextLine = lastLine.concat(lastLine.length === 0 ? [] : ' ', word);

    if (nextLine.join('').length > maxWidth) {
      // Continuing the previous line is too long. Start a new line.
      return lines.concat([[word]]);
    }

    // Replace the previous line wih the extended version of itself
    lines[lines.length - 1] = nextLine;
    return lines;
  }, [[]]);

  // Pad the lines
  const allPaddedLines = allLines.reduce((paddedLines, line, paddedIndex) => {
    if (paddedIndex === allLines.length - 1) {
      // ignore last line
      return paddedLines.concat(line.join(''));
    }

    // Insert a space placeholder if there is only one word in the sentence
    const testLine = line.length === 1 ? line.concat(' ') : line;

    // Determine all the spaces
    const allSpaces = testLine.reduce((spaces, word, index) => (
      /\s/.test(word) ? spaces.concat(index) : spaces
    ), []);

    // Pad the spaces by looping through the list of spaces and adding one padding each
    [...Array(maxWidth - line.join('').length)].forEach(() => {
      const index = allSpaces.shift();
      line[index] = (line[index] || '').concat(' ');
      allSpaces.push(index);
    });

    return paddedLines.concat(line.join(''));
  }, []);

  // Special pad the last line
  const lastLine = allPaddedLines.pop();
  const padding = Array(maxWidth - lastLine.length).fill(' ').join('');
  allPaddedLines.push(`${lastLine}${padding}`);

  return allPaddedLines;
};

console.log(JSON.stringify(fullJustify(['This', 'is', 'an', 'example', 'of', 'text', 'justification.'], 16), null, 2));
console.log(JSON.stringify(fullJustify(['Listen', 'to', 'many,', 'speak', 'to', 'a', 'few.'], 6), null, 2));
console.log(JSON.stringify(fullJustify(['What', 'must', 'be', 'shall', 'be.'], 12), null, 2));
