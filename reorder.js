/**
* Reorder the elements of the array
*/

var theArr=["a","b","c","d","e","f"];   // Output: ["f", "a", "e", "b", "d", "c"]
var otherArr=[1, 2, 3, 4, 5, 6];        // Output: [6, 1, 5, 2, 4, 3]

function reorder(arr) {
	var newArr = [],
			shouldPop = true;

	for (var i = 0, max = arr.length; i < max; i++) {
			newArr.push(shouldPop ? arr.pop() : arr.shift());
			shouldPop = !shouldPop;
	}

	return newArr;
}