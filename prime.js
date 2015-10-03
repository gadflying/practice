/*
* Write several ways to test for a prime number
*/ 

// Using while loop
function isPrimeWhile(n) {
	// 1 is not prime (nor composite)
	if (n === 0 || n === 1) return false;
	
	var divisor = 2;

	// Only need to divide half the numbers
	var max = Math.ceil(n/2);
	while (divisor <= max) {
		if (n % divisor === 0) {
			return false;
		}
		divisor++;
	}

	return true;
}

// Using recursion
function isPrimeRecursive(n) {
	if (n === 0 | n === 1) return false;
	return isPrime(n, 2);

	function isPrime(n, i) {
		if (i >= n / 2) {
			// Only need to test against half the numbers
			return true;
		} else if (n % i === 0) {
			return false;
		} else {
			return isPrime(n, i + 1);
		}
	}
}

// Using recursion, shorthand
function isPrimeRecursive2(n) {
	return prime(n, 2);

	function prime(n, divisor) {
		if (n/2 < divisor) return true;
		if (n % divisor === 0) return false;
		return prime(n, ++divisor);
	}  
}