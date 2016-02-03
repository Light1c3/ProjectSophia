var Api = require('../utils/api');
var Reflux = require('reflux');
var Actions = require('../actions');

module.exports = Reflux.createStore({
  listenables: [Actions],
  getGames: function() {
    return Api.get('games/all')
      .then(function(json){
        this.games = json;
        this.triggerChange();
      }.bind(this));
  },
  getGameById: function(GameId) {
    return Api.get('games/' + GameId)
      .then(function(json){
        this.games = json;
        this.triggerChange();
      }.bind(this));
  },
  triggerChange: function() {
    this.trigger('change', this.games);
  }
});
