/* 
* Write a function to determine if an object is NaN
* Underscore.js source code: http://underscorejs.org/docs/underscore.html
*/

function isNaN() {
	return Object.prototype.toString.call(obj) === '[object Number]' && obj !== +obj;
}