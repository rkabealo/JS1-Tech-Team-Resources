const rp = require('request-promise');
const $ = require('cheerio');

// Return object with { name: <President_Name>, birthday: <President_Birthday> } for this url
const potusParse = function(url) {
  return rp(url)
    .then(function(html) {
      return {
        // Looks just like jquery
        name: $('.firstHeading', html).text(),
        birthday: $('.bday', html).text(),
      };
    })
    .catch(function(err) {
      console.log("Error")
    });
};

module.exports = potusParse;
