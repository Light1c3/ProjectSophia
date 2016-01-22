var React = require('react');
var Reflux = require('reflux');
var Actions = require('../actions');
var Header = require('./header');
var Game = require('./game');
var Router = require('react-router');
var GamesStore = require('../stores/games-store');
var Options = require('../data/game-options');
var Link = Router.Link;


module.exports = React.createClass({
  mixins: [
    Reflux.listenTo(GamesStore, 'onChange')
  ],
  getInitialState: function(){
    return {
      games: []
    }
  },
  componentWillMount: function() {
    Actions.getGames();
  },
  render: function() {
    return <div>
      {this.renderGames()}
    </div>
  },
  renderGames: function() {
    return this.state.games.map(function(game) {
      <p>{game.Publisher}</p>
      console.log(game.Publisher);
    });
 },
  onChange: function(event, games) {
    this.setState({games: games});
  }
});
