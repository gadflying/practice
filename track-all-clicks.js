// Track any click on a page using native method
function trackAllClicksNative() {
	document.addEventListener('click', clickHandler);

	function clickHandler(e) {
		console.log('clicked', e.target);
	}
}
