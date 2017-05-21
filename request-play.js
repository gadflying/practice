require('isomorphic-fetch');

const urls = [
  'http://api.zippopotam.us/us/90210',
  'http://api.zippopotam.us/us/94133',
  'http://api.zippopotam.us/us/94168',
  'http://api.zippopotam.us/us/94105',
];

urls.forEach((url) => {
  fetch(url)
    .then(response => response.json())
    .then((json) => {
      console.log('json', json);
    })
    .catch((error) => {
      console.error('error', error);
    });
});
