var Api = require('../utils/api');
var Reflux = require('reflux');
var Actions = require('../actions');

module.exports = Reflux.createStore({
  listenables: [Actions],
  getBenchmarks: function(GameId) {
    return Api.get('benchmarks/game/' + GameId)
      .then(function(json){
        this.benches = json;
        this.triggerChange();
      }.bind(this));
  },
  postBenchmarks: function(BBody) {
    return Api.post('benchmarks/add', BBody)      
  },
  triggerChange: function() {
    this.trigger('change', this.benches);
  }
});
