var Fetch = require('whatwg-fetch');
var rootUrl = 'http://localhost:51982/api/';

module.exports = window.api = {
  get: function(url) {
    return fetch(rootUrl + url, {})
    .then(function(response){
      return response.json()
    });
  },
  post: function(url, BBody) {
    return fetch(rootUrl + url, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Method': 'Post'
      },
      body: JSON.stringify({
        Username: "PostTest",
        CPU: "Intel Skylake",
        GameId: 4,
      })
    })
  }
};
