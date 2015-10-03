/*
http://www.careercup.com/question?id=5119852580700160

Suppose you have a long flowerbed in which some of the plots are planted and some are not. However, flowers cannot be planted in adjacent plots - they would compete for water and both would die. Given a flowerbed (represented as an array containing booleans), return if a given number of new flowers can be planted in it without violating the no-adjacent-flowers rule
<br>Sample inputs
<br>
<br>Input: 1,0,0,0,0,0,1,0,0
<br>
<br>3 => true
<br>4 => false
<br>Input: 1,0,0,1,0,0,1,0,0
<br>
<br>1 => true
<br>2 => false
<br>input: 0
<br>
<br>1 => true
<br>2 => false
*/

// 2 ==> true
// 3 ==> false 
var flowerbed = [
	false, 
	false,
	true,
	false,
	false,
	false,
	false,
	true
];

// 3 => true
// 4 => false
var flowerbed_test1 = [
	true,
	false,
	false,
	false,
	false,
	false,
	true,
	false,
	false
]

// 1 => true
// 2 => false;
var flowerbed_test2 = [
	true,
	false,
	false,
	false,
	true,
	false,
	false,
	true,
	false,
	false
]

// 1 => true
// 2 => false
var flowerbed_test3 = [
	false
]

// 5 => true
// 6 => false
var flowerbed_test4 = [
	false,
	false,
	false,
	false,
	false,
	false,
	false,
	false,
	false
]

function canPlaceFlowers(flowerbed, numberToPlace) {

	// We use bitmasking to determine if plot is avaialble
	// An alternative to bitmasking is to use a Array.every()
	var PREV_BITMASK = 4;   // 100
	var CURR_BITMASK = 2;   // 010
	var NEXT_BITMASK = 1;   // 001
	var AVAILABLE_PLOT = 7; // 111


	var availablePlots = 0;
	var goodPlots = 0;
	for (var i = 0, max = flowerbed.length; i < max; i++) {
		var plot = 0;
		var h = i - 1;
		var j = i + 1;

		if (!flowerbed[h]) {
			plot |= PREV_BITMASK;
		} 

		if (!flowerbed[i]) {
			plot |= CURR_BITMASK;
		} else {
			// Figure out optimal number of plots
			goodPlots += Math.floor((availablePlots + 1) / 2);
			availablePlots = 0;
		}

		if (!flowerbed[j]) {
			plot |= NEXT_BITMASK;
		}

		if (plot === AVAILABLE_PLOT) {
			availablePlots += 1;
		}
	}

	// Process last batch of plots
	goodPlots += Math.floor((availablePlots + 1) / 2);
	return numberToPlace <= goodPlots;
}

canPlaceFlowers(flowerbed_test3, 1); // ==> true