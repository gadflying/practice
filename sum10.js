/*
* Given an array of ints less than 10. Find a pair that sum up to 10
*/

var sum1 = [5, 7, 3, 8, 9, 2, 21];

function sum10(ints) {
	ints.sort(function(a, b) {
		a = parseInt(a);
		b = parseInt(b);

		if (a < b) return -1;
		if (a == b) return 0;
		if (a > b) return 1;
	}); // ascending sort[1, 2, 4]

	var i = 0;
	var j = ints.length - 1;

	while(i < j) {
		var a = ints[i];
		var b = ints[j];
		
		if (a + b == 10) {
			return [a, b];
		}

		if (a + b > 10) {
			// The sum is too big, Add a smaller number.
			j--;	
		} else {
			// a + b < 10
			// The sum is too small. Add a larger number.
			i++;	
		}
	}

	return [];
}

