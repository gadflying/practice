// Jquery
var d1 = $.Deferred();
var d2 = $.Deferred();

$.when(d1, d2)
  .then((d1result, d2result) => {
    console.log('all done', d1result, d2result);
  });

setTimeout(() => {
  console.log('d1 state', d1.state());
  d1.resolve('d1 resolved');
  console.log('d1 state', d1.state());
}, 1000);

setTimeout(() => {
  console.log('d2 state', d2.state());
  d2.resolve('d2 resolved');
  console.log('d2 state', d2.state());
}, 2000);


// Native
Promise.all([
  Promise.resolve(3),
  new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, 'resolved!');
  }),
]).then(values => {
  console.log(...values);
});
