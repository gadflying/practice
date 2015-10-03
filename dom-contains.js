/*
* Write a function that checks if the DOM element b contains DOM element a
*/

// Uses while loop. Goes from child to parent
function containsWhile(a, b) {
	while (a.parentNode) {
		if (a.parentNode == b) {
			return true;
		} else {
			a = a.parentNode;
		}
	}
	return false;
}

// Uses recursion
function containsRecurse(a, b) {
	if (!a.parentNode) {
		return false;
	} else if (a.parentNode == b) {
		return true;
	} else {
		return containsRecurse(a.parentNode, b);
	}
}

// Uses native method
function containsNative(a, b) {
	return b.contains(a);
}