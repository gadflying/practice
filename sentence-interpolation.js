/*
Given a string of the form: "{Valery,Jason,Peter} was in {good,bad} mood and he went 
to the {beach, party, library}"; Print out all the permutations of the string. 
Eg: Valery was in good mood and he went to the beach.  

Real algorithm: https://en.wikipedia.org/wiki/String_interpolation#Algorithms
*/
var sentencesRecursive = function() {
	var hash = {
		name: ['Valery', 'Jason', 'Peter'],
		mood: ['good', 'bad'],
		place: ['beach', 'party', 'library']
	}

	var sentences = [];
	build(sentences, '', '', ['name', 'mood', 'place'], 0);
	return sentences;

	function build(sentences, sentence, fragment, params, i) {
		// Build fragment
		sentence += fragment;

		if (params.length === i) {
			// End of sentence
			sentences.push(sentence);
		} else {

			var param = params[i];
			var values = hash[param];
			var filler;

			// Add static words
			if (param === 'name') {
				filler = ' was in a ';
			} else if (param === 'mood') {
				filler = ' mood and they went to the ';
			} else {
				filler = '';
			}

			// Loop through possible values
			for (var j = 0; j < values.length; j++) {
				var fragment = values[j] + filler;
				build(sentences, sentence, fragment, params, i+1);
			}
		}
	}
}

// Use a for loop to do the same String interpolation
var sentencesForLoop = function() {
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

