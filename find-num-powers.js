/*
* Write several ways to return the number of integers that are powers of 'b'
* 
* findNumPowersOfB([2, 4, 8, 9], 2) ==> 3
* findNumPowersOfB([2, 4, 8, 9], 3) ==> 1
*/

// Uses native method
function findNumPowersOfBNative(x, b) {
    return x.filter(function(num) {
        // We keep dividing the number until it reaches 1 or if modulo returns a remainder
    	while(num % b === 0 || num === 1) {
    		if (num === 1) return true;
    		num /= b
    	}

    	return false;
    }).length
}

// Uses a for-loop and recursion
function findNumPowersOfB(x, b) {
    
    var numPowers = 0;

    // Go through every item in list
    for (var i = 0; i < x.length; i++) {
        var value = x[i];
        numPowers += isPowerOfB(value, b) ? 1 : 0;
    }
    
    return numPowers;
    
    function isPowerOfB(x, b) {
        if (x === 1) {
            return true;
        } else if (x % b !== 0) {
            return false;
        } else {
            return isPowerOfB(x/b, b);
        }
    }
}