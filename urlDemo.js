import url from 'url';

const urlString = 'https://www.google.com/search?q=hello+world';

const urlObject = new URL(urlString);

console.log(urlObject);

console.log(url.format(urlObject));

console.log(import.meta.url); // file:///pathDemo.js

console.log(url.fileURLToPath(import.meta.url)); // /pathDemo.js

const searchParams = new URLSearchParams(urlObject.search);

console.log(searchParams);
