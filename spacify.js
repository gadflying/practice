// Create this function:
// spacify('hello world') // => 'h e l l o  w o r l d'
var spacifyForLoop = function(input) {
  var word2 = '';
  for (var i = 0, max = input.length; i < max; i++) {
    word2 += input[i] +  ' ';
  }
  
  return word2;
}

// Native version
var spacifyNative = function(input) {
  return input.split('').join(' ');
}


// Add spacify to the String prototype
// 'hello world'.spacify ==> 'h e l l o  w o r l d'
String.prototype.spacify = function() {
  // Uses native version
  return this.split('').join(' ');
};