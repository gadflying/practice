/*
http://www.careercup.com/question?id=5766696197423104

Given a collection of pair representing intervals write a function which inserts new interval into collection and merges overlapping intervals.
var intervals = [[-10, -1],[0, 2],[4, 10]];

<p>Given a collection of pair representing intervals write a function which inserts new interval into collection and merges overlapping intervals.
<br>Example:
<br>[-10, -1], [0,2], [4,10]
<br>insert [-5, 1]
<br>output: [-10, 2], [4, 10]</p>
*/

var intervals= [[-10, -1], [0,2], [4,10]];

// Assumes intervals are sorted
function insert(tuple) {
	var intervalsToRemove = [];
	var newTuple = [];

	if (!tuple || tuple.length === 0 || tuple[0] >= tuple[1]) {
		throw "Nope. I only work with good tuples";
	}

	// Loop through intervals to figure out where tuple belongs
	for (var i = 0, max = intervals.length; i < max; i++) {
		var interval = intervals[i];

		if (tuple[0] > interval[1]) {
			// Tuple comes after interval
			continue;
		}

		if (tuple[0] >= interval[0] && tuple[1] <= interval[1]) {
			// Do nothing. Tuple is within an interval
			return intervals;
		}

		if (tuple[0] < interval[0]) {
			// Clean left boundary
			newTuple.push(tuple[0]);

			if (tuple[1] < interval[0]) {
				// Clean right boundary
				newTuple.push(tuple[1]);
				intervals.splice(i, intervalsToRemove.length, newTuple);
				return intervals;
			}

			if (tuple[1] <= interval[1]) {
				// Merge right boundary
				newTuple.push(interval[1]);
				intervalsToRemove.push(interval);
				intervals.splice(i, intervalsToRemove.length, newTuple);
				return intervals;
			}
			
		} else if (tuple[0] >= interval[0]) {
			// Merge left boundary
			newTuple.push(interval[0]);
		}

		// Right tuple boundary is greater than right interval boundary
		intervalsToRemove.push(interval);
		
		// Figure out how many intervals the right tuple boundary spans
		var j = i + 1;
		for (j; j < max; j++) {
			var intervalB = intervals[j];
			if (tuple[1] > intervalB[1]) {
				// Tuple is greater than interval. Moving on.
				intervalsToRemove.push(intervalB);
				continue;
			}

			if (tuple[1] < intervalB[0]) {
				// Clean right boundary
				newTuple.push(tuple[1])
				intervals.splice(i, intervalsToRemove.length, newTuple);
				return intervals;
			}

			// Merge right boundary
			intervalsToRemove.push(intervalB);
			newTuple.push(intervalB[1]);
			intervals.splice(i, intervalsToRemove.length, newTuple);
			return intervals;
		}
		
		// Add tuple to end of intervals
		newTuple.push(tuple[1]);
		intervals.splice(i, intervalsToRemove.length, newTuple);
		return intervals;
	}

	intervals.push(tuple);
	return intervals;
}