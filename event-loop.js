/**
* Event loop
*/
var i = 0;
function test() {
  while (i < 20) {
     console.log(i)
     i++
     setTimeout(function() { i = 20; }, 0)
  }
}

test();
// output would print 1 thourgh 19  1 ... 19 

// Should be able to explain how event loop works and how callback queue is handled
// setTimeout puts the function at the end of the event loop. It prints 1 ... 19,
// because it hasn't finished processing the function test()