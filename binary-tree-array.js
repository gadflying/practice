// Binary Tree
// Implement a binary tree into an array
var BinaryTree = function() {
	'use strict';

	this.nodes = [];

	this.toArray = function(level, node) {
		return node + (1 << level) - 1;
	}

	this.setNode = function(value, level, node) {
		this.nodes[this.toArray(level, node)] = value;
	}

	this.getNode = function(level, node) {
		return this.nodes[this.toArray(level, node)];
	}
}


/*
 tree form    array form
     1        [0, 1, 2, 3, 4, 5, 6, 7]
   2   3
  4 5 6 7
*/
var tree = new BinaryTree();
tree.setNode(1,0,0);
tree.setNode(2,1,0);
tree.setNode(3,1,1);
tree.setNode(4,2,0);
tree.setNode(5,2,1);
tree.setNode(6,2,2);
tree.setNode(7,2,3);
