/* 
Print a level order traversal of a tree

http://www.careercup.com/question?id=5765154941698048

Tree: 
    1 
   / \ 
  3   5 
 / \ / 
 2 4 7 
/ \ \ 
9 6 8 

========== 
Expected Output: 
1 
35 
247 
968 


// Java
class TreePrinter { 
	static class Node { 
		int value; 
		Node left; 
		Node right; 

		public Node(int value, Node left, Node right) { 
			this.value = value; 
			this.left = left; 
			this.right = right; 
		} 
	} 

	public void printTree(Node root) { 
		// implementation here 
	}
}

*/


function Node(value, left, right) {
	this.value = value;
	this.left = left || null;
	this.right = right || null;
}

// 
var root = 
	new Node(1,        // level 0, root
		new Node(3,      // level 1
			new Node(2,    // level 2
				new Node(9), // level 3
				new Node(6)), 
			new Node(4, 
				null, 
				new Node(8))), 
		new Node(5, 
			null, 
			new Node(7, 
				null, 
				null)
			)
		);

function printTree(root) {
	var breadth = [];

	// Record the rows of the tree in the array 'breadth'
	recordBreadth(root, breadth, 0);


	printBreadth(breadth);

	function recordBreadth(root, breadth, level) {
		if (!root) return;

		// Each index in the breadth array represents a level. 
		// We convert int to string and concatenate the values
		breadth[level] = (breadth[level] || '') + root.value; 

		recordBreadth(root.left, breadth, level + 1);
		recordBreadth(root.right, breadth, level + 1);
	}

	// Helper function to print tree
	function printBreadth(tree) {
		for (var i = 0, max = tree.length; i < max; i++) {
			console.log(tree[i]);
		}
	}
}

printTree(root);