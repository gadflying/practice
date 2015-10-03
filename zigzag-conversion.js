// https://leetcode.com/problems/zigzag-conversion/

/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"
Write the code that will take a string and make this conversion given a number of rows:

string convert(string text, int nRows);
convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".
*/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
	if (!numRows) {
		throw "numRows not valid"
	}

	if (numRows === 1 || numRows > s.length) {
		return s;
	}

    var offset = numRows + numRows - 2,
    	result='';

    for (var row = 0; row < numRows; row++) {
    	var x = row;

    	result += s[x];
    	while (x < s.length) {
    		x += offset;
	    	var col = getColumn(x)
	        var diag = getDiag(x, row)
	        result += diag + col;	
    	}
    }

    function getColumn(x) {
    	var col = s[x] || '';
    	return col;
    }

    function getDiag(x, row) {
    	var y = x - row * 2;
    	if (row === 0              // Top row. No diagnal
    		|| row === numRows - 1 // Buttom row. no diagnal
    		|| !s[y] ) {           // Index out of bounds 
    		return '';
    	}
    	return s[y];
    }

    return result;
};

// 3 Row
// P   A   H   N
// A P L S I I G
// Y   I   R

// 4 Row
// P     I     N
// A   L S   I G
// Y A   H R
// P     I

// 5 Row
// P       H    8, 8
// A     S I    9, 7
// Y   I   R   10, 6
// P L     I G 11, 5
// A       N   12, 4

convert('PAYPALISHIRING', 3); // => 'PAHNAPLSIIGYIR'
convert("PAYPALISHIRING", 6); // => 'PRAIIYHNPSGAIL'