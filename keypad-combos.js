// Given a sequence of numbers. Print out all the letter combinations

// 2: a, b, c
// 23: af, ae, ad, bf, be, bd, cf, ce, cd

const keypad = {
  1: [''],
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r'],
  8: ['s', 't', 'u'],
  9: ['w', 'x', 'y', 'z'],
  0: ['']
};

function getCombos(seq = []) {
  return getCombosDeep(seq, 0, [], '', '');
}

function getCombosDeep(seq, i, combos, stem, letter) {
  const combo = stem + letter;
  if (i === seq.length) {
    return combos.concat(combo);
  }

  const letters = keypad[seq[i]];
  for (var j = 0; j < letters.length; j++) {
    return getCombosDeep(seq, i + 1, combos, stem, letter);
  }
}


function getCombosV1(keypad, seq = []) {
  // const letters = keypad[seq[i]];
  const combos = [];
  getCombosDeepV1(keypad, seq, 0, combos, '', '');
  return combos;
}

function getCombosDeepV1(keypad, seq, i, combos, stem, letter) {
  const combo = stem + letter;
  if (i === seq.length) {
    return combos.push(combo);
  }

  const letters = keypad[seq[i]];
  for (var j = 0; j < letters.length; j++) {
    const nextLetter = letters[j];
    getCombosDeepV1(keypad, seq, i + 1, combos, combo, nextLetter);
  }
}


const phonenumber = [1, 2];
const combos = phonenumber.reduce((memo, value, key, numbers) => {

  return ;
}, []);
