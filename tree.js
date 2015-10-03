/*
* Use recursion to insert a value and if the tree already contains the value
*/

// Tree class
function Tree(value) {  
  this.value = value;
  this.left = null;
  this.right = null;
}

Tree.prototype.insert = function(value) {

  if (value < this.value) {
    if (this.left) {
      this.left.insert(value);
    } else {
      this.left = new Tree(value);
    }
  }

  if (value > this.value) {
    if (this.right) {
      this.right.insert(value);
    } else {
      this.right = new Tree(value)
    }
  }

}

// Should return whether a tree contains 'value'
// Returns boolean if a node or any of its descendents contains 'value'
Tree.prototype.contains = function(value) {  
	if (this.value === value) {
  	return true;
  } else if (this.value < value) {
    // left side
    return this.left && this.left.contains(value);
  } else {
    // right side
    return this.right && this.right.contains(value);
  }
}