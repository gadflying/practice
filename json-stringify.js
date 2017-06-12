const stringify = (value) => {
  // null
  if ([null, Infinity, -Infinity, NaN].includes(value)) {
    return 'null';
  }

  // boolean
  if (typeof value === 'boolean') {
    return `${value}`;
  }

  // number
  if (typeof value === 'number') {
    return `${value}`;
  }

  // string
  if (typeof value === 'string') {
    return `"${value}"`;
  }

  // array
  if (Array.isArray(value)) {
    const json = [];
    value.forEach((item) => {
      json.push(stringify(item));
    });
    return `[ ${json.join(', ')} ]`;
  }

  // object
  if (typeof value === 'object' && !Array.isArray(value)) {
    const json = [];
    const keys = Object.keys(value);
    keys.forEach((key) => {
      const keyValue = value[key];
      json.push(`"${key}": ${stringify(keyValue)}`);
    })

    return `{ ${json.join(', ')} }`;
  }

  return undefined;
}

console.log(stringify());
console.log(stringify(null));
console.log(stringify({ a: ['hello', 1, 2, { b: false }] }));
console.log(stringify(true));
console.log(stringify(false));
console.log(stringify(4));
console.log(stringify(Infinity));
console.log(stringify(-Infinity));
console.log(stringify(NaN));
console.log(stringify('cat'));
console.log(stringify([1, 2, 3, 'cat', [4, 5, Infinity, NaN, 'dog', { key: Infinity }]]));
console.log(stringify({ fruit: 'apple' }));
console.log(stringify({ on: true, fruit: 'apple', car: ['mazda', 'toyota', 5, 7] }));
