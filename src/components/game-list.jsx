var React = require('react');
var Header = require('./header');
var GameCat = require('./gamecat');
var Router = require('react-router');
var Options = require('../data/game-options');
var Link = Router.Link;


module.exports = React.createClass({
  getInitialState: function(){
    return {
    }
  },
  render: function() {
    var list = Options.gamecatData.map(function(gamecatProps){
      return <div className="text-center">
        <GameCat {...gamecatProps} />
      </div>
    });
    return <div>
      {list}
    </div>
  }
});
