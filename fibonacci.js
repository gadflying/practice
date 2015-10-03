// Implement multiple ways to do a fibanacci sequence
// Return the value of fibonacci number at nth sequence

// Version 1
// O(1.618^n)
function fibRecursive(n) {
	return _fib(n);

	function _fib(n) {
		if (n <= 2) return 1;
		return _fib(n-1) + _fib(n-2);
	}
}

// Version 2
// Caches value for closer to O(1) performance. Less calls being made.
function fibRecursiveCache(n) {
	var cache = [];

	return _fib(n);

	function _fib(n) {
		if (n <= 2) return 1;

		if (cache[n]) {
			return cache[n];
		}

		var value = _fib(n-1) + _fib(n-2);
		cache[n] = value;
		return value;
	}	
}

// Version 3
// Uses a normal for loop. Calculate from the beginning. O(n)
function fibLoop(n) {
	return _fib(n);

	function _fib(n) {
		if (n <= 2) return 1;

		var i = 3;
		var a = 1;
		var b = 1;
		var c;
		while (i <= n) {
			c = a + b;
			a = b;
			b = c;
			i++;
		}

		return c;
	}
}

function fibLoop2(n) {
	var a = 1, b = 1, c, i=2;

	if (n <= 2) return 1;
	while (i < n) {
		c = a + b;
		a = b;
		b = c;
		i++;
	}

	return c;
}