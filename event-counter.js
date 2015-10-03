/*
* Write an event counter that can handle thoughts of page hits per second
* Take into consideration memory loss and size of array
*/

var EventCounter = function() {
	'use strict';

	var events = {};
	var ONE_SECOND = 1000;
	var ONE_MINUTE = ONE_SECOND * 60;
	var FIVE_MINUTES = ONE_MINUTE * 5;
	var INTERVAL = ONE_SECOND;
	var LAST_INTERVALS = ONE_SECOND * 5;
	var MAX_EVENTS = 5;


	// Records the event
	this.record = function(event) {

		// Interval class
		// Events are bunched up into intervals
		var Interval = function(newTimestamp) {
			this.count = 1;
			this.timestamp = newTimestamp;
			this.print = function() {
				console.log("count:", this.count);
				console.log("timestamp:", this.timestamp);
			}
		}

		// Current time
		var now = new Date();

		var timestamps = events[event];

		if (timestamps) {
			// Check the latest timestamp
			var lastIndex = timestamps.length - 1;
			var lastInterval = timestamps[lastIndex];
			var duration = now - lastInterval.timestamp;

			if (duration <= INTERVAL) {
				// Newest fit, falls within time of last interval. Add
				lastInterval.count += 1;
			} else {
				// Newest hit falls outside of interval. Make a new one.
				timestamps.push(new Interval(now));
			}

			if (timestamps.length > MAX_EVENTS) {
				// Too many intervals to keep track. Keep the last MAX_EVENTS
				timestamps.splice(0, timestamps.length - MAX_EVENTS);
			}

		} else {
			// New event. Create interval
			events[event] = [ new Interval(now) ];
		}
	}

	// Reports the number of times an event has occured in the LAST_INTERVALS
	this.report = function(event) {
		
		var timestamps = events[event];
		var numHits = 0;
		var now = new Date();

		if (!timestamps) {
			return numHits;
		}
		
		for (var i = 0; i < timestamps.length; i++) {
			// Get timestamp
			var timestamp = timestamps[i];
			var duration = now - timestamp.timestamp;

			if (duration <= LAST_INTERVALS) {
				// Time stamp is within interval. Get count
				numHits += timestamp.count;
			} else {
				// Remove remaining items in array if intervals are older than LAST_INTERVALS for memory efficiency
				var n = timestamps.length - i;
				timestamps.splice(0,n);
				return numHits;
			}
		}

		// No intervals to remove
		return numHits;
	}
}


// Tester and runner
var EventMaker = function() {

	var eventCounter = new EventCounter();

	// Events to track
	var events = [
		'cat sat down',
		'dog sat down',
		'dog chase cat',
		'mouse ate cheese'
	]

	// Choose random item from array
	var getRandomItem = function(arr) {
		var i = Math.floor(Math.random() * arr.length);
		return arr[i];
	}

	// Get random time event happened
	var getRandomMilliseconds = function(max) {
		return Math.floor(Math.random() * max);
	}

	// Set all the events
	this.setEvents = function() {
		var timeCounter = 0;

		for(var i = 0, maxEvents = 1000000; i < maxEvents; i++) {
			var time = getRandomMilliseconds(100);
			var event = getRandomItem(events);
			
			timeCounter += time;
			setTimeout(recordTime(event, time), timeCounter);

			function recordTime(event, time) {
				// Wrapping function in function for closure reasons
				return function() {
					eventCounter.record(event);
				}
			}
		}
	}

	// Print current status of events
	this.print = function() {
		for(var i = 0; i < events.length; i++) {
			var event = events[i];
			var num = eventCounter.report(event);
			console.log(event, num);
		}
	}
}

var eventMaker = new EventMaker();