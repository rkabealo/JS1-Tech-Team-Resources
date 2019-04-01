const request = require('sync-request');
const $ = require('cheerio');
const potusParse = require('./potusParse');
const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';

let html = request('GET', url).getBody().toString();

const wikiUrls = [];
for (let i = 0; i < 45; i++) {
  wikiUrls.push($('big > a', html)[i].attribs.href);
}

presidents = wikiUrls.map(function(url) {
  return potusParse('https://en.wikipedia.org' + url);
});

console.log(presidents);
