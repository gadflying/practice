// Determine if a string is a palindrome

function isPalindrome(text) {
	// Have two pointers
	// Start from ends of string and work toward center
	// If ever the points do not equal then it's not a palindrome

	var start = 0;
	var end = text.length - 1;

	while (start < end) {
		if (text[start] !== text[end]) {
			return false;
		}
		start++;
		end--;
	}

	return true;
}

isPalindrome('racecar'); // => true