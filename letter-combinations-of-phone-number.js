/*
* Print all possible words from phone digits
* http://www.geeksforgeeks.org/find-possible-words-phone-digits/
*/
var keypad = {
	'2': 'abc',
	'3': 'def',
	'4': 'ghi',
	'5': 'jkl',
	'6': 'mno',
	'7': 'pqrs',
	'8': 'tuv',
	'9': 'wxyz'
}

// Takes array of numbers between 2-9
// For example: [2], [2, 3], [5, 6, 7]
function main(input) {
	var combinations = [];
	dfs(combinations, '', '', input, 0);
	return combinations;
}

// Depth-first search of numbers
function dfs(combinations, stem, char, input, i) {
	stem += char;
	if (i === input.length) {
		// Save path from root to leaf
		combinations.push(stem);
	} else {
		// Get children and iterate through child nodes
		var set = keypad[input[i]];
		for (var j = 0; j < set.length; j++) {
			dfs(combinations, stem, set[j], input, i + 1);
		}
	}
}

// main([2,3,4]) => ["adg", "adh", "adi", "aeg", "aeh", "aei", "afg", "afh", "afi", "bdg", "bdh", "bdi", "beg", "beh", "bei", "bfg", "bfh", "bfi", "cdg", "cdh", "cdi", "ceg", "ceh", "cei", "cfg", "cfh", "cfi"]


/*
Given a string of the form: "{Valery,Jason,Peter} was in {good,bad} mood and he went 
to the {beach, party, library}"; Print out all the permutations of the string. 
Eg: Valery was in good mood and he went to the beach.  
*/

var sentences = function() {
	var hash = {
		name: ['Valery', 'Jason', 'Peter'],
		mood: ['good', 'bad'],
		place: ['beach', 'party', 'library']
	}

	var sentences = [];
	build(sentences, '', '', ['name', 'mood', 'place'], 0);
	return sentences;

	function build(sentences, sentence, fragment, params, i) {
		sentence += fragment;
		if (params.length === i) {
			sentences.push(sentence);
		} else {
			var param = params[i];
			var values = hash[param];
			var filler;

			if (param === 'name') {
				filler = ' was in a ';
			} else if (param === 'mood') {
				filler = ' mood and they went to the ';
			} else {
				filler = '';
			}

			for (var j = 0; j < values.length; j++) {
				var fragment = values[j] + filler;
				build(sentences, sentence, fragment, params, i+1);
			}
		}
	}
}

var sentences2 = function() {
	var hash = {
		name: ['Valery', 'Jason', 'Peter'],
		mood: ['good', 'bad'],
		place: ['beach', 'party', 'library']
	}

	var sentences = [];

	for (var i = 0; i < hash.name.length; i++) {
		var name = hash.name[i];
		for (var j = 0; j < hash.mood.length; j++) {
			var mood = hash.mood[j];
			for (var k = 0; k < hash.place.length; k++) {
				var place = hash.place[k];
				var sentence = name + ' was in a ' + mood + ' and they went to the ' + place; 
				sentences.push(sentence);
			}
		}
	}

	return sentences;
}

sentences2();

