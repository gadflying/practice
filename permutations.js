/*
* Print out all the different permutations of a string
* http://www.geeksforgeeks.org/write-a-c-program-to-print-all-permutations-of-a-given-string/
*/

var letters = 'abc';

function main(letters) {
	permute(letters.split(''), 0, 0);
}

function permute(letters, l, r) {
	// l = left pointer
	// r = right pointer
	if (l === letters.length) {
		console.log(letters.join(''));
	} else {
		for (r; r < letters.length; r++) {
			swap(letters, l, r);
			permute(letters, l+1, l+1);
			// Swaps the letters back for the next iteration
			swap(letters, l, r);
		}
	}
}

function swap(letters, a, b) {
	var t = letters[a];
	letters[a] = letters[b];
	letters[b] = t;
}

// main('abc') ==> 'abc', 'acb', 'bac', 'bca', 'cba', 'cab'