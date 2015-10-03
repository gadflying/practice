/*
http://www.careercup.com/question?id=5689376707182592

* Three segments of lengths A, B, C form a triangle iff
*
*      A + B > C
*      B + C > A
*      A + C > B
*
* e.g.
*  6, 4, 5 can form a triangle
* 10, 2, 7 can't
*
* Given a list of segments lengths algorithm should find at least one triplet of segments that form a triangle (if any).
*
* Method should return an array of either:
* - 3 elements: segments that form a triangle (i.e. satisfy the condition above)
* - empty array if there are no such segments
*/

var side = [6, 4, 5, 10, 2, 7];
var side1 = [6, 4, 5];
var side2 = [10, 2, 7];

function getTriangleSides(sides) {

     if (sides.length < 3) {
          return [];
     }

     // Sort array
     // Start from the beginning and work your way down
     // If all three conditions are met, add to array and return
     sides.sort();

     var A_BITMASK = 1; // 001
     var B_BITMASK = 2; // 010
     var C_BITMASK = 4; // 100
     var TRIANGLE_BITMASK = 7; // 111

     for (var i = 2, max = sides.length; i < max; i++) {
          var h = i - 1;
          var g = i - 2;

          var a = sides[g];
          var b = sides[h];
          var c = sides[i];

          var triangle = 0;

          if (b + c > a) {
               triangle |= A_BITMASK;
          }

          if (c + a > b) {
               triangle |= B_BITMASK;
          }

          if (a + b > c) {
               triangle |= C_BITMASK;
          }

          if (triangle === TRIANGLE_BITMASK) {
               return [a, b, c];
          }
     }

     return [];
}

getTriangleSides(side); // => [2, 4, 5]