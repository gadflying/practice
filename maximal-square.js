/*
221. Maximal Square
https://leetcode.com/problems/maximal-square/#/description

Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and
return its area.

For example, given the following matrix:

1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0
Return 4.
*/

/**
 * @param {character[][]} matrix
 * @return {number}
 */
const maximalSquare = (matrix) => {
  let largestSquare = 0;
  const sums = [];
  matrix.forEach((row, y) => {
    const sumRow = [];
    sums.push(sumRow);
    [...row].map(Number).forEach((cell, x) => {
      if (cell === 1) {
        const left = sumRow[sumRow.length - 1] || 0;
        const above = (sums[y - 1] || [])[x] || 0;
        const diag = (sums[y - 1] || [])[x - 1] || 0;
        const square = Math.min(left, above, diag) + 1;
        sumRow.push(square);
        largestSquare = Math.max(square, largestSquare);
      } else {
        sumRow.push(0);
      }
    });
  });

  return largestSquare * largestSquare;
};

console.log(maximalSquare(['10100', '10111', '11111', '10010']));
console.log(maximalSquare(['01101', '11010', '01110', '11110', '11111', '00000']));
/*
01101
11010
01110
11110
11111
00000
*/
