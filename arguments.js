// Combine the string parameters of indefinite length of a function into a sentence
// log('hello', 'world', 'friends') => '(foo.js) hello world friends'
// log('hello', 'friends') => '(foo.js) hello friends'
function log() {
  var words = '(foo.js) ';
  for (var i = 0, max = arguments.length; i < max; i++) {
    words += arguments[i] + ' ';
  }
  return words;
}