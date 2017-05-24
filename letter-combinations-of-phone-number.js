/*
* Print all possible words from phone digits
* http://www.geeksforgeeks.org/find-possible-words-phone-digits/
*/
const keypad = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz',
};

// Takes array of numbers between 2-9
// For example: [2], [2, 3], [5, 6, 7]
function main(input) {
  const combinations = [];
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
    const set = keypad[input[i]];
    for (let j = 0; j < set.length; j++) {
      dfs(combinations, stem, set[j], input, i + 1);
    }
  }
}

const letterCombinations = (digits) => {
  const keypad = {
    0: '',
    1: '',
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };
  const dfsDeep = (combos, stem, char, input = [], i) => {
    const nextStem = stem + char;
    if (i === input.length && nextStem) {
      // Save path from root to leaf
      combos.push(nextStem);
    } else {
      // Get children and iterate through child nodes
      const set = keypad[input[i]] || '';
      for (let j = 0; j < set.length; j += 1) {
        dfsDeep(combos, nextStem, set[j], input, i + 1);
      }
    }
  };

  const combos = [];

  dfsDeep(combos, '', '', digits, 0);
  return combos || [];
};

// main([2,3,4]) => ["adg", "adh", "adi", "aeg", "aeh", "aei", "afg", "afh", "afi", "bdg", "bdh", "bdi", "beg", "beh", "bei", "bfg", "bfh", "bfi", "cdg", "cdh", "cdi", "ceg", "ceh", "cei", "cfg", "cfh", "cfi"]

console.log(letterCombinations([2, 3]));
console.log(letterCombinations([]));

/*
Given a string of the form: "{Valery,Jason,Peter} was in {good,bad} mood and he went
to the {beach, party, library}"; Print out all the permutations of the string.
Eg: Valery was in good mood and he went to the beach.
*/

const sentences = function () {
  const hash = {
    name: ['Valery', 'Jason', 'Peter'],
    mood: ['good', 'bad'],
    place: ['beach', 'party', 'library'],
  };

  const sentences = [];
  build(sentences, '', '', ['name', 'mood', 'place'], 0);
  return sentences;

  function build(sentences, sentence, fragment, params, i) {
    sentence += fragment;
    if (params.length === i) {
      sentences.push(sentence);
    } else {
      const param = params[i];
      const values = hash[param];
      let filler;

      if (param === 'name') {
        filler = ' was in a ';
      } else if (param === 'mood') {
        filler = ' mood and they went to the ';
      } else {
        filler = '';
      }

      for (let j = 0; j < values.length; j++) {
        var fragment = values[j] + filler;
        build(sentences, sentence, fragment, params, i + 1);
      }
    }
  }
};

const sentences2 = function () {
  const hash = {
    name: ['Valery', 'Jason', 'Peter'],
    mood: ['good', 'bad'],
    place: ['beach', 'party', 'library'],
  };

  const sentences = [];

  for (let i = 0; i < hash.name.length; i++) {
    const name = hash.name[i];
    for (let j = 0; j < hash.mood.length; j++) {
      const mood = hash.mood[j];
      for (let k = 0; k < hash.place.length; k++) {
        const place = hash.place[k];
        const sentence = `${name} was in a ${mood} and they went to the ${place}`;
        sentences.push(sentence);
      }
    }
  }

  return sentences;
};

sentences2();
