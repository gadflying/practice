/*
* Return the first leaf node of the dom tree
*/

function domTraverse() {
	var dom = document;

	while(dom.hasChildNodes()) {
		dom = dom.firstChild;
	}

	var childNode = dom;

	return childNode;
}