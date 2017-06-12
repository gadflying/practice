/* Write your function here. Useful type checking functions:
 *
 * typeof(obj) === "string"
 * typeof(obj) === "number"
 * Array.isArray(obj) === true
 * typeof(obj) === "object" [and !isArray]
 */

var my_json_encode = function(obj) {
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

  if (typeof(obj) === "number") {
      return obj + "";
  }

  if (typeof(obj) === "string") {
      return `"${obj}"`;
  }

  if (Array.isArray(obj)) {
    const json = [];
    obj.forEach((item) => {
        json.push(my_json_encode(item));
    });
    return `[${json.join(', ')}]`
  }

  if (typeof(obj) === "object" && !Array.isArray(obj)) {
      const json = [];
      const keys = Object.keys(obj);
      keys.forEach((key) => {
          const value = obj[key];
          json.push(`"${key}": ${my_json_encode(value)}`);
      });

      return `{${json.join(', ')}}`;
  }

  return "";
}

process.stdin.resume();
process.stdin.setEncoding("ascii");

var input = "";
var parsed_input;

process.stdin.on("data", function (chunk) {
    input += chunk;
});
process.stdin.on("end", function () {
	parsed_input = JSON.parse(input);
    output = my_json_encode(parsed_input);

    process.stdout.write(output);
});
