/**
https://leetcode.com/problems/pascals-triangle-ii/

Given an index k, return the kth row of the Pascal's triangle.

For example, given k = 3,
Return [1,3,3,1].

Note:
Could you optimize your algorithm to use only O(k) extra space?

k    pascal
0      1
1     1 1
2    1 2 1
3   1 3 3 1
**/

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
	if (rowIndex < 0 || typeof rowIndex !== 'number') {
		throw "rowIndex must be a positive number";
	}

	// [1] is top of triangle
	return pascal(rowIndex, [1]);

	function pascal(n, r) {
		if (n === 0) {
			return r;
		} else {
			var nextRow = getNextRow(r);
			return pascal(n-1, nextRow);
		}
	}

	function getNextRow(row) {
		if (row == [1]) {
			return [1, 1];
		} else {
			return add(1, [1]);
		}

		// Add the values of the prevoius row to create the new row
		function add(i, newRow) {
			if (i >= row.length) {
				newRow.push(1);
				return newRow;
			} else {
				newRow.push(row[i-1] + row[i]);
				return add(i+1, newRow);
			}
		}
	}
};

getRow(13) // => [1, 13, 78, 286, 715, 1287, 1716, 1716, 1287, 715, 286, 78, 13, 1]