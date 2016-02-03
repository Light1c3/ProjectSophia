var Request = require('superagent');
var Promise = require('es6-promise').Promise;

var rootUrl = 'https://www.igdb.com/api/v1/';
var apiKey = '2sU8MDGHrJ6Fs069eKuS5j0W-KS5Fnl6QLaxGIlKP6A';
module.exports = window.api = {
  get: function(url) {
    return new Promise(function(resolve, reject) {
      Request(rootUrl + url, function(err, res){
        resolve(JSON.parse(res))
      });
    });
  },
  post: function(url, BBody) {
    return new Promise(function(resolve, reject) {
      Request.post(rootUrl + url)
        .send(BBody)
        .end(function (err, res) {
          resolve(res)
        });
    });
  }
};
