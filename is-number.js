/*
* What are different ways to determine if a variable is a number?
* Infinity is considered a number
* Underscore.js source code: http://underscorejs.org/docs/underscore.html
*/

typeof a === 'number'; 

Object.prototype.toString.call(a) === '[object Number]';

// Infinity returns false (chrome)
!!parseInt(a);

!!parseFloat(a); 

!!+a