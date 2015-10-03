/*
* Count the high bits of a number
*/

function count_set_bits(n) {
	var count = 0;
	while (n != 0) {
		n &= (n-1);
		count += 1;
	}
	return count;
}