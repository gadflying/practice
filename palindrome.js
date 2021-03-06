// Determine if a string is a palindrome

function isPalindrome(text) {
  // Have two pointers
  // Start from ends of string and work toward center
  // If ever the points do not equal then it's not a palindrome

  let start = 0;
  let end = text.length - 1;

  while (start < end) {
    if (text[start] !== text[end]) {
      return false;
    }
    start += 1;
    end -= 1;
  }

  return true;
}

// Functional version
const isPalindromeF = word => word === word.split('').reverse().join('');

// Find all the palindrome pairs in a sentence
const palindromPairs = (words) => {
  // const allPairs = [];
  const histogram = words.split(' ').reduce((pals, word) => {
    if (isPalindromeF(word)) {
      const { [word]: count = 0 } = pals;
      return Object.assign({}, pals, { [word]: count + 1 });
    }

    return pals;
  }, {});

  const allPairs = Object.keys(histogram).reduce((pairs, word) => (
    pairs.concat(histogram[word] > 1 ? word : [])
  ), []);

  return allPairs;
};

// Find all the palindrome pairs in a sentence
const palindromPairs2 = (words) => {
  const allPairs = {};
  const pals = {};

  words.split(' ').forEach((word) => {
    if (pals[word]) {
      allPairs[word] = true;
    } else if (isPalindromeF(word)) {
      // const { [word]: count = 0 } = pals;
      pals[word] = true;
    }
  });

  return Object.keys(allPairs);
};

console.log(isPalindrome('racecar')); // => true
console.log(isPalindromeF('racecar'));
console.log(isPalindromeF('notPalindrome'));

console.log(palindromPairs('racecar dog cat cat racecar noon noon noon non'));
console.log(palindromPairs2('racecar dog cat cat racecar noon noon noon non'));

const pal = (word = '') => {
  let left = 0;
  let right = word.length - 1;
  while (left < right) {
    if (word[left] === word[right]) {
      left += 1;
      right -= 1;
    } else {
      return false;
    }
  }

  return true && !!word;
};

console.log(pal('noon'));
console.log(pal('cat'));
console.log(pal('racecar'));
console.log(pal(''));

/**
* @param {char[]} Array of characters
**/
function isPal(chars) {
  const len = chars.length;
  for (let i = 0; i < len - i - 1; i += 1) {
    if (chars[i] !== chars[len - i - 1]) {
      return false;
    }
  }
  return true;
}
