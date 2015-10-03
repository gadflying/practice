/*
* Both functions don't reliably work.
* Investigate with jquery verions ($.fn.jquery)
*/

// Won't capture clicks for future elements added to the dom
function trackAllClicksJqueryPresent() {
	$('*').on('click', clickEvent);

	var clickEvent = function(e) {
		console.log('clicked', e.target);
		e.stopPropagation();
	};
}

// Capture clicks for elements added to the DOM in the future
function trackAllClicksJQueryFuture() {
	$(document).on('click', '*', clickEvent);

	var clickEvent = function(e) {
		console.log('clicked', e.target);
		e.stopPropagation();
	};
}

