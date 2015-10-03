/* 
* Write a function to report the frequency of letters in a string
* 
* input: 'aabbcccddd'
* output: '2a2b3c3d'
*/

function frequency(input) {
	var counts = counter(input);
	var encoding = builder(counts);
	return encoding;

	// Builds histogram of letters
	function counter(letters) {
		var lettersHash = {};

		letters.split('').forEach(function(letter) {
			if (lettersHash[letter]) {
				// Existing letter
				lettersHash[letter] += 1;
			} else {
				// New letter
				lettersHash[letter] = 1;
			}
		});

		return lettersHash;
	}

	function builder(letters) {
		var str = '';
		for (var letter in letters) {
			str += letters[letter] + letter;
		}

		return str;
	}
}

console.log(frequency('aabbcccddd'));