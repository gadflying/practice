/*
* Dutch National Flag
* https://en.wikipedia.org/wiki/Dutch_national_flag_problem
*/

var arr = [5, 3, 3, 3, 1, 5, 1, 5, 1, 5, 3, 3];
var arr2 = [5, 5, 5, 5, 5, 3, 3, 3, 3, 1, 1, 1];

function dnf(arr, mid) {
	var top_p = 0, mid_p = 0, bottom_p = arr.length - 1;

	while (mid_p <= bottom_p) {
		if (arr[mid_p] < mid) {
			swap(top_p, mid_p);
			top_p++;
			mid_p++;
		} else if (arr[mid_p] > mid) {
			swap(mid_p, bottom_p);
			bottom_p--
		} else {
			mid_p++;
		}
	}

	return arr;

	function swap(a, b) {
		var tmp = arr[a];
		arr[a] = arr[b];
		arr[b] = tmp;
	}
}