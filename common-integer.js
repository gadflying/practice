/* 
* Write a function to return the intersection of two integer arrays
*/

var a = [2, 4, 6];
var b = [1, 2, 3, 4];

// Uses a hash keep track of the common integers
function commonHash(a, b) {
	var common = [];
	var hash = {};

	// Build hash of keys for array a
	for (var i = 0; i < a.length; i++) {
		var value = a[i];
		hash[value] = true;
	}

	// Check if values of b are in array a
	for (var i = 0; i < b.length; i++) {
		var value = b[i];
		if (hash[value]) {
			common.push(value);
		}
	}

	return common;
}


// Sort arrays and use two pointers
function commonIncrement(a,b) {
	a.sort();
	b.sort();

	var i = 0, j = 0;
	var common = [];

	// Increment pointers until larger than array
	while (i < a.length && j < b.length) {
		var aValue = a[i];
		var bValue = b[j];

		if (aValue < bValue) {
			i++;
		} else if (aValue > bValue) {
			j++;
		} else {
			// Common integer found
			common.push(aValue);
			i++;
			j++;
		}
	}

	return common;
}