require('isomorphic-fetch');

const urls = {
  'http://api.zippopotam.us/us/90210': {},
  'http://api.zippopotam.us/us/94133': {},
  'http://api.zippopotam.us/us/94168': {},
  'http://api.zippopotam.us/us/94105': {},
};

const goodUrls = [];
const badUrls = [];

const promises = Object.keys(urls).map((url) => {
  console.log('url', url);
  return fetch(url)
    .then(response => response.json())
    .then((json) => {
      console.log('json', JSON.stringify(json, null, 2));
      // return Promise.reject('Nope');
      if (true || json === urls[url]) {
        goodUrls.push(url);
        return { url, valid: true };
      }

      badUrls.push(url);
      return { url, valid: false };
    })
    // .catch((error) => {
    //   console.error('fetch error', error);
    //   badUrls.push(url);
    //   return `Sorry, bad: ${url}`;
    // });
});

Promise.all(promises.concat()).then((responses) => {
  console.log('responses', responses);
  console.log('good', goodUrls);
  console.log('bad', badUrls);
}).catch((error) => {
  console.log('promise all error', error);
});
