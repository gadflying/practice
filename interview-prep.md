# Interview prep

## Different ways to compare objects
`{} == {}` will not work. Will always return true. Equal is not the same as identical. `0 == -0`
1. Convert to string using `Array.prototype.join()` or `JSON.stringify()`
2. Compare class name
3. Compare all the elements in the object
4. `Object.is(a,b)` Available in ES6

## Primitives
1. number
2. string
3. undefined
4. boolean
5. null
6. (symbol) ES6

## typeof
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
```javascript
$ typeof undefined // => undefined
$ typeof null // => object (ECMAScript bug)
$ typeof 'a' // => string
$ typeof 3 // => number
$ typeof 'function() {}' // => function
$ typeof /s/ // => object
$ typeof true // => boolean
$ typeof [] // object
$ typeof {} // object
```

## CSS Box Model
A box that is wrapped around HTML elements. Total width of box consists of margins, borders, padding.

## Floats and clears
Putting a `clear:both` property on parent element will remove floats on both sides

## Difference between `undefined` and `null`
```javascript
undefined //==> no value. Not initialized.
null //==> is a value. Nothing. Empty.
```
## Strict and loose equality
```javascript
3 === '3' // => false. Strict equality (identical)
3 == '3'  // => true, Loose equality 
```

## Closure
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
Closures are functions that refer to independent (free) variables. In other words, the function defined in the closure 'remembers' the environment in which it was created. 

A form of lexical-scoping
The scope of a variable is defined by its location within the source code (it is apparent lexically) and nested functions have access to variables declared in their outer scope.

```javascript
function foo() {
	var a = 4;
	function printA() {
		console.log(a);
	}
	printA(); // ==> 4
}
```

## Preventing HTML Injection
Using encoded characters like `&lt; &gt;` prevent HTML injection

## Adding events to future elements added to the DOM
```
$(document).on('click', '.selectors', function() {
	// Add these events later when the selector is added
});
```

## Variable hoisting

```javascript
// `var a` is hoisted to the top of the function in javascript.
var a = 0;
function foo() {
	console.log(a)
	var a = 3;
}
foo(); // => undefined 


// Identical function
var a = 0;
function foo() {
    var a;
	console.log(a)
	a = 3;
}
foo(); // => undefined
```

## Event loop
Non-blocking, Won't be interrupted.
```javascript
// EVENT LOOP
while(event.waitingForMessage) {
	event.processNextMessage();
}
```

## Strict mode
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict;' works on the top of scripts or functions

Not compatible with IE8 or IE9
Can't add global variables
Converts implicity errors into explicity errors. Throws them
- Make explicit Can't assign into objects that meant to be read only, like undefined, NaN
- Can't delete undeletable properties
No octal syntax
eval doesn't create new variables into the surrounding scope

## Garbage collection
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management
Reference-counting is the old version
Mark-and-sweep algorithm is the current algorithm used in modern browsers
- This algorithm reduces the definition of "an object is not needed anymore" to "an object is unreachable".

## DOM
https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
The Document Object Model (DOM) is a programming interface for HTML, XML and SVG documents. 
It provides a structured representation of the document and it defines a way that the structure can be accessed from programs so that they can change the document structure, style and content. 
JavaScript is commonly used to access the model.

## `getElementById` difference in jQuery and DOM
jQuery getElementById `$('#id')` will return Jquery object which wraps the DOM element including all jquery methods. DOM method only returns the DOM element.

## Accessing DOM elements
JavaScript is the most common way

## Difference between Margin, Box, Padding
Margin is outside. Box is the box model. How elements are styles. Padding is inside the box.

## HTML5 vs HTML4
- HTML5 has more semantic tags. <section>, <article>, <nav>, <header>, <footer>, <aside>
- Better support for video and audio
- Better form validation using the constraint API
- Web Workers
- History API
- Drag and Drop

## Alternatives to jQuery
- yui, underscore, iodash
- prototype, moo-tools

## How to transform this array into key-value pair?
```javascript
var json = [
	{
		value: 5,
		name: 'bar'	
	},
	{
		value: 6,
		name: 'foo'
	}
]

var newJson = json.map(function(obj) {
	var newObj = {};
	newObj[obj.name] = obj.value;
	return newObj;
})
```

## LocalStorage
https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
```javascript
window.localStorage

localStorage.getItem();
localStorage.setItem();
localStorage.removeItem();
localStorage.clear();
localStorage.key();
localeStorage.length
```
## JSON
```javascript
JSON.stringify() //==> returns string
JSON.parse() //==> returns object
```
## Algorithm to draw a circle
https://en.wikipedia.org/wiki/Midpoint_circle_algorithm

## Semantic markup
Semantic HTML is the use of HTML markup to reinforce the semantics, or meaning, of the information in webpages and web versus the presentation of the information

# Event bubbling versus Event Capturing
http://stackoverflow.com/questions/4616694/what-is-event-bubbling-and-capturing

Bubbling is child-> part. Bubble up. 
Event capturing is trickle down. Parent to child.

jQuery has a `true` parameter (need to check this)

## Create a DOM attribute
```javascript
var attribute = document.createAttribute('class');
attribute.value = 'new-class';
```

## Speeding up a slow page
- Make files smaller
- Make fewer server calls
- Make code run faster
- Browser caching
- Optimize images
- Reduce server response times
- Concatenation, minification, gzipping
- Clean code

## Describe Object-Oriented programming
- Programming language model organized around objects instead of actions
- We have to think about how the objects are related to each other
- An object has fields, attributes, and has procedures called methods that can access and modify the fields

## Downsides of OOP
- More planning because of data modeling
- Larger because there is more boiler plate code to shape the objects
- Slower because it demands more resources and because the files are larger

## Difference between Abstract and Interfaces
- Both cannot be instantiated and both can contain a mix of methods
- Must declare fields that are not static and final
- All fields are automaticall public and all methods are automatically public
- You can only extend one abstract class, but implement many interfaces

## Use abstract class when
- share code among several closely related classes
- Classes that extend your abstract class to have many common methods
- Want to declare non-static or non-final fields
- They're also a good choice for nonleaf classes in class hierarchies.

## Use interface for
- Expect unrelated classes to implement the same interface
- Want to specific the behavior, but don't care about the implementation
- Take advantage of multiple inheritance type

## JSONP
https://en.wikipedia.org/wiki/JSONP

## What is a preprocessor
https://en.wikipedia.org/wiki/Preprocessor