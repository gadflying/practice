/*
* http://www.careercup.com/question?id=6211592599371776
*
* Alternative: use Underscore.js: _.sample
* http://underscorejs.org/#sample
*/

// Shuffle a given array such that each position is equally likely.
var list = [3,4,5,6,7,8];

function randomize(list, numTimes) {
	numTimes = numTimes || list.length;

	for (var i = 0; i < numTimes; i++) {
		swap(getI(), getI());
	}

	return list;

	function getI() {
		return Math.floor(Math.random() * list.length);
	}

	function swap(i1, i2) {
		var temp = list[i1];
		list[i1] = list[i2]
		list[i2] = temp;
	}
}

randomize(list, list.length); // => [6, 7, 3, 8, 4, 5] (one possible solution)