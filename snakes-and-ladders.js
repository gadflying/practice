/*
* Implement a snakes and laddors algorithm to find the shortest path
* http://www.geeksforgeeks.org/snake-ladder-problem-2/
*/

// One Cell in board has six different paths (6 dice rolls)
var Node = function (level, maxLevel) {
  this.pointers = [];

  /* TEST CODE BELOW. Not part of actual function */
  // Random generate a graph
  level = level || 0;
  maxLevel = maxLevel || 5;
  this.pointers = (Math.random() < 0.999 && level < maxLevel) ? new Array(6) : [];
  for (let i = 0; i < this.pointers.length; i++) {
    this.pointers[i] = new Node(level + 1, maxLevel);
  }
};

// Wrapper around a node. Purpose is to keep BST depth out of the node structure
const Set = function (node, level) {
  this.node = node;
  this.level = level;
};

// Breadth-first search to find an empty pointers array
const findMinNumRolls = function (root) {
  var set = new Set(root, 0);
  const queue = [set];

  // Process nodes in queue
  while (queue.length) {
    // Get next node
    var set = queue.shift();

    // Get its pointers
    const numPointers = set.node.pointers.length;

    if (!numPointers) {
      // No more children. Found the end.
      return set.level;
    }

    // BST part of search. Add children in queue to be processed
    for (let i = 0; i < numPointers; i++) {
      queue.push(new Set(set.node.pointers[i], set.level + 1));
    }
  }

  // Exactly as comment says
  return "Strange. Shouldn't be here.";
};


findMinNumRolls(new Node());
