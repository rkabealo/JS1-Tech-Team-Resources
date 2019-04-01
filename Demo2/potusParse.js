const request = require('sync-request');
const $ = require('cheerio');

const potusParse = function(url) {
  let html = request('GET', url).getBody().toString();
  return {
    name: $('.firstHeading', html).text(),
    birthday: $('.bday', html).text(),
  };
};

module.exports = potusParse;
