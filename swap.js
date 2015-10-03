/*
* Write different methods to swap
*/ 
var a = 'boy';
var b = 'girl';

function swapArray(a, b) {
	console.log('a:', a, 'b:', b);
	b = [a, a = b][0];
	console.log('a:', a, 'b:', b);
}

function swapTemp(a, b) {
	var tmp = a;
	a = b;
	b = tmp;
}