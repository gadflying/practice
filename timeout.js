/*
* Write a function to print the number 0 - 5 every 2 seconds
*/

function useSetInterval() {
	var TWO_SECONDS = 2000;
	var i = 0;
	var max = 5;
	var id = setInterval(printNum, TWO_SECONDS);

	function printNum() {
		console.log(i++);
		if (i === max) {
			clearInterval(id);
			console.log("interval cleared");
		}
	}
}

function useSetTimeout() {
	var TWO_SECONDS = 2000;
	for (var i = 0, max = 5; i < max; i++) {
		doSetTimeout(i);
	}

	function doSetTimeout(i) {
		setTimeout(function() {
			console.log(i);
		}, TWO_SECONDS * (i + 1));
	}
}