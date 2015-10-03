// Rectangle class
function Rectangle(x1, x2, y1, y2) {
	this.x1 = x1;  // left
	this.x2 = x2; // right
	this.y1 = y1;  // top
	this.y2 = y2; // bottom
}

// Check if rectangle intersects other rectangle
Rectangle.prototype.intersects = function(other) {

	// Return true if none of the conditions match
	return !(
		other.x2 <= this.x1 || // other rectangle's right side is to the left of this rectangle
		other.x1 >= this.x2 || // other rectangle's left side is to the right of this rectangle
		other.y1 >= this.y2 || // other rectangle's top side is below this rectangle
		other.y2 <= this.y1    // other rectangle's bottom side is above this rectangle
	);
}

// Calculates how much two rectangles overlap
// Similarly, if overlap is 0 then rectangles don't intersect
Rectangle.prototype.overlaps = function(other) {
	// For visualization
	// http://jsfiddle.net/62gLw18t/
	var width = Math.max(0, Math.min(this.x2, other.x2) - Math.max(this.x1, other.x1));
	var height = Math.max(0, Math.min(this.y2, other.y2) - Math.max(this.y1, other.y1));

	return width * height;
}

// Intersecting rectangles
var a = new Rectangle(0, 10, 0, 10);
var b = new Rectangle(5, 15, 5, 15);

a.intersects(b); // => true
b.intersects(a); // => true
a.overlaps(b);   // => 25
b.overlaps(a);   // => 25

// Non-intersecting rectangles
var a2 = new Rectangle(0, 10, 0, 10);
var b2 = new Rectangle(15, 25, 15, 25);

a2.intersects(b2); // => false
b2.intersects(a2); // => false
a2.overlaps(b2);   // => 0
b2.overlaps(a2);   // => 0