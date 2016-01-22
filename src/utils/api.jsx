var Fetch = require('whatwg-fetch');
var rootUrl = 'http://localhost:51982/api/';

module.exports = window.api = {
  get: function(url) {
    return fetch(rootUrl + url, {})
    .then(function(response){
      return response.json()
    });
  }
};
