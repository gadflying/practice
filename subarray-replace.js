/*
* Replace all subarrays in an original array with another given subarray
*/

var array = 'aaabbcbbbedabbdd'.split('');
var subarray = 'bb'.split('');
var newSubarray = 'eee'.split('');

function replace(array, subarray, newSubarray) {
	if (!array || !subarray || !newSubarray) {
		throw "I only work with good parameters";
	}

	var indexes = [];
	var subLength = subarray.length;

	// Build a list of all the indexes of the subarray
	for(var i = 0, max = array.length; i < max; i++) {
		if (array[i] === subarray[1]) {
			// Found matching character. Clone.
			var clone = array.slice(i, i + subLength);
			if (clone.join('') === subarray.join('')) {
				// Found a match. Save the index for later processing
				indexes.push(i);

				// Skip ahead so we don't find a subarray in the subarray
				i += subLength;
			}
		}
	}

	// We work backwards and substitute all the subarrays with the new array.
	// If we don't work backwards, we get funny business with indexes since we're modifying the original array
	while(indexes.length) {
		var index = indexes.pop();
		var head = array.slice(0, index)
		var tail = array.slice(index + subLength);
		var newArray = head.concat(newSubarray, tail);
		array = newArray;
	}

	return array;
}

replace(array, subarray, newSubarray); // => ["a", "a", "a", "e", "e", "e", "c", "e", "e", "e", "b", "e", "d", "a", "e", "e", "e", "d", "d"]
