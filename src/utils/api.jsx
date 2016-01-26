var Request = require('superagent');
var Promise = require('es6-promise').Promise;

var rootUrl = 'http://localhost:51982/api/';

module.exports = window.api = {
  get: function(url) {
    return new Promise(function(resolve, reject) {
      Request(rootUrl + url, function(err, res){
        resolve(JSON.parse(res.text))
      });
    });
  },
  post: function(url, BBody) {
    console.log(BBody);
    return new Promise(function(resolve, reject) {
      Request.post(rootUrl + url)
        .send(BBody)
        .end(function (err, res) {
          resolve(res)
        });
    });
  }
};
