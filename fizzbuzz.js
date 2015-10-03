/**
* FizzBuzz
* https://en.wikipedia.org/wiki/Fizz_buzz
* http://rosettacode.org/wiki/FizzBuzz
*
* Print the values of 1 to n on a new line.
* If the number is a multiple of 3, print 'Fizz' instead
* If the number is a multiple of 7, print 'Buzz' instead
* If the number is a multiple of 3 and 7, print 'FizzBuzz' instead
*
* output:
* 1
* 2
* fizz
* ...
*/

function fizzBuzzLoop(n) {
	for (var i = 1; i <= n; i++) {
		var fizz = (!(i % 3) ? 'Fizz' : '');
		var buzz = (!(i % 5) ? 'Buzz' : '');
		var result = fizz + buzz || i;
		console.log(result);
	}
}
fizzBuzzLoop(100);

// http://rosettacode.org/wiki/FizzBuzz
// Uses pattern matching
function fizzBuzzHash(n) {
	for (var i = 1; i <= n; i++) {
		console.log({
			truefalse: 'Fizz', 
			falsetrue: 'Buzz', 
			truetrue: 'FizzBuzz'
		}[(i % 3 === 0) + '' + (i % 5 === 0)] || i);
	}
}
fizzBuzzHash(100);

// http://rosettacode.org/wiki/FizzBuzz
// Uses recursion and map
function fizzBuzzRecursiveNative(n) {
	return (function rng(i) {
		return i ? rng(i - 1).concat(i) : []
	})(100).map(
		function (n) {
			return n % 3 ? (
				n % 5 ? n : "Buzz"
			) : (
				n % 5 ? "Fizz" : "FizzBuzz"
			)
		}
	)

	return result;
}
fizzBuzzRecursiveNative(100);
