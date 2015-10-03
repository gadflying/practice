/*
* Reduce and ReduceRight examples
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight
*/

// (Left to Right) Returns 2/4/8 === 0.0625
[2, 4, 8].reduce(function (prev, curr) {
	return prev/curr;
});

// (Right to Left) Returns 8/4/2 === 1
[2, 4, 8].reduceRight(function (prev, curr) {
	return prev/curr;
});