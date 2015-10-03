/*
*  Fill out the multiply function such that the code below works
*/
var double = multiply(2);
double(2) // Returns 4

var quad = multiply(4)
quad(2) // Returns 8

function multiply(a) { 
	// Uses closure
  return function(b) {
		return a * b;
  }
}