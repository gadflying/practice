/**
* 251. Flatten 2D Vector
* https://leetcode.com/problems/flatten-2d-vector/#/description
*
* Implement an iterator to flatten a 2d vector.

For example,
Given 2d vector =
[
  [1,2],
  [3],
  [4,5,6]
]
By calling next repeatedly until hasNext returns false,
the order of elements returned by next should be: [1,2,3,4,5,6].
**/

/**
 * @constructor
 * @param {Integer[][]} vec2d
 */
const Vector2D = function Vector2D(vec2d) {
  this.vectors = vec2d.reduce((prevVectors, vector) => prevVectors.concat(vector), []);
  this.pointer = 0;
};


/**
 * @this Vector2D
 * @returns {boolean}
 */
Vector2D.prototype.hasNext = function hasNext() {
  return this.pointer < this.vectors.length;
};

/**
 * @this Vector2D
 * @returns {integer}
 */
Vector2D.prototype.next = function next() {
  const vector = this.vectors[this.pointer];
  this.pointer += 1;
  return vector;
};

/**
 * Your Vector2D will be called like this:
 * var i = new Vector2D(vec2d), a = [];
 * while (i.hasNext()) a.push(i.next());
*/

/** Using splice is faster **/
const Vector2D2 = function Vector2D2(vec2d) {
  this.vectors = vec2d.reduce((prevVectors, vector) => prevVectors.concat(vector), []);
};

/**
 * @this Vector2D
 * @returns {boolean}
 */
Vector2D2.prototype.hasNext = function hasNext() {
  return this.vectors.length > 0;
};

/**
 * @this Vector2D
 * @returns {integer}
 */
Vector2D2.prototype.next = function next() {
  return this.vectors.splice(0, 1)[0];
};

const Vector2D3 = function Vector2D3(vec2d) {
  let vectors = vec2d.reduce((prevVectors, vector) => prevVectors.concat(vector), []);
  const vectorsCopy = vectors.splice();
  const hasNext = () => vectors.length > 0;
  const next = () => vectors.splice(0, 1)[0];
  const reset = () => {
    vectors = vectorsCopy.slice();
  };

  return { hasNext, next, reset };
};

Vector2D3([[2]]);
