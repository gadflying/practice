/**
269. Alien Dictionary
https://leetcode.com/problems/alien-dictionary/#/description

There is a new alien language which uses the latin alphabet.
However, the order among letters are unknown to you. You receive a list of non-empty words from
the dictionary, where words are sorted lexicographically by the rules of this new language.
Derive the order of letters in this language.
**/

/**
 * Does not work
 * @param {string[]} words
 * @return {string}
 */
const alienOrder = (words) => {
  const alphabet = {};

  for (let i = 0; i < words.length - 1; i += 1) {
    const word1 = words[i];
    const word2 = words[i + 1];

    const length = Math.min(word1.length, word2.length);
    for (let j = 0; j < length; j += 1) {
      const letter1 = word1[j];
      const letter2 = word2[j];

      if (letter1 !== letter2) {
        alphabet[letter1] = letter2;
      } else {
        //alphabet[letter1] = '';
      }
    }
  }

  const bottoms = Object.keys(alphabet).reduce((bottoms, top) => {
    return bottoms.concat(alphabet[top]);
  }, []);

  const differenceSet = (list1 = [], list2 = []) => {
    const set1 = new Set(list1);
    const set2 = new Set(list2);
    return [...new Set([...set1].filter(item => !set2.has(item)))];
  };

  const differences = differenceSet(Object.keys(alphabet), bottoms);

  const order = [];
  let [letter] = differences;

  if (differences.length === 0) {
    return '';
  }

  while (letter) {
    order.push(letter);
    letter = alphabet[letter];
  }

  console.log('alphabet', alphabet);

  return order.join('');
};

console.log(alienOrder(['wrt', 'wrf', 'er', 'ett', 'rftt']));
console.log(alienOrder(['z', 'x']));
console.log(alienOrder(['z', 'z']));
console.log(alienOrder(['z', 'x', 'z']));
