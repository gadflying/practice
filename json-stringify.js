/* Write your function here. Useful type checking functions:
 *
 * typeof(obj) === "string"
 * typeof(obj) === "number"
 * Array.isArray(obj) === true
 * typeof(obj) === "object" [and !isArray]
 */

const myJsonEncode = (obj) => {
  // YOUR CODE HERE

  // Things to consider
  // Symmetry: every open has a close
  // Need to know types:
  // Iterate through the obj

  // If array, push open bracket in first array
  // in separate array, push the close bracket.
  // At the end, reverse the array, and do a join()

  // Iterate through the object
  // Object.keys() go through the object

  if (!obj || obj === null) {
    return 'null';
  }

  if (typeof (obj) === 'number') {
    return `${obj}`;
  }

  if (typeof (obj) === 'string') {
    return `"${obj}"`;
  }

  if (Array.isArray(obj)) {
    const json = [];
    obj.forEach((item) => {
      json.push(myJsonEncode(item));
    });
    return `[${json.join(', ')}]`;
  }

  if (typeof (obj) === 'object' && !Array.isArray(obj)) {
    const json = [];
    const keys = Object.keys(obj);
    keys.forEach((key) => {
      const value = obj[key];
      json.push(`"${key}": ${myJsonEncode(value)}`);
    });

    return `{ ${json.join(', ')} }`;
  }

  return '';
};

console.log(myJsonEncode({ a: ['hello', 1, 2, { b: 'world' }] }));
