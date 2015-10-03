/*
* Write a function that does run length encoding
* input: "aaaabbcaa"
* output: "4a2b1c2a"
*/



function rle(input) {
	var currLetter = '';
	var currCount = 0;
	var str = ''

	for (var i = 0, max = input.length; i < max; i++) {
		var letter = input[i];
		if (letter === currLetter) {
			// Same leter. Increment
			currCount += 1;
		} else {
			// Letter has changed

			if (currCount) {
				str += currCount + currLetter;
			}

			// Keep track of new letter
			currLetter = letter;
			currCount = 1;
		}
	};

	// Remaining letter and count
	str += currCount + currLetter;
	return str;
}

console.log(rle('aaaabbcaa'));