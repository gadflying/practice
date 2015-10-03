// Execute a function without a constructor
// https://developer.mozilla.org/en-US/docs/Glossary/IIFE
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript#Functions

(function () {
	console.log("Calling function without constructor");
})();

(function () {
  console.log("Another way to call a function without constructor");
}());