/**
Given: var thing = new Thing();
How would you implement the following functionality:

thing.set('x', val);
thing.set('y', val2);

console.log(thing.get('x')); // val
console.log(thing.get('y')); // val2
**/


const Thing = function Thing() {
  this.things = {};

  return this;
};

Thing.prototype.set = function set(key, value) {
  this.things[key] = value;
};

Thing.prototype.get = function get(key) {
  return this.things[key];
};

const thing = new Thing();

thing.set('x', 'this is x');
thing.set('y', 'this is y');

console.log(thing.get('x'));
console.log(thing.get('y'));
console.log(thing);

const Stuff = function Stuff() {
  const stuffs = {};
  const set = (key, value) => {
    stuffs[key] = value;
  };
  const get = key => stuffs[key];

  return {
    get,
    set,
  };
};

const stuff = new Stuff();
stuff.set('x', 'hello x');
stuff.set('y', 'hello y');

console.log(stuff.get('x'));
console.log(stuff.get('y'));
console.log(stuff);

console.log(Thing());
