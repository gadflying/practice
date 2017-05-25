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

console.log(isPalindrome('racecar')); // => true
console.log(isPalindromeF('racecar'));
console.log(isPalindromeF('notPalindrome'));

console.log(palindromPairs('racecar dog cat cat racecar noon noon noon non'));
