const rp = require('request-promise');
const $ = require('cheerio');
const potusParse = require('./potusParse');

// Hit this url
const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';

rp(url)
  .then(function(html) {
    // Create list of urls
    const wikiUrls = [];
    for (let i = 0; i < 45; i++) {
      // Find "/wiki/<President_Name>" for each president, push to the list
      wikiUrls.push($('big > a', html)[i].attribs.href);
    }
    return Promise.all(
      // Map each "/wiki/<President_Name>" to that president's name & birthday 
      wikiUrls.map(function(url) {
        return potusParse('https://en.wikipedia.org' + url);
      })
    );
  }) // Return values passed down promise chain
  .then(function(presidents) {
    console.log(presidents);
  })
  .catch(function(err) {
    console.log(err);
  });
