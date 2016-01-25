var React = require('react');
var Reflux = require('reflux');
var Actions = require('../actions');
var Header = require('./header');
var GameObject = require('./game');
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
    return <div>
      {this.state.games.map((game) =>
        <GameObject
          key={game.Id}
          Publisher={game.Publisher}
          ImageUrl={game.ImageUrl}
          Title={game.Title}
          Id={game.Id}
          Description={game.Description}
          MarkCount ={game.MarkCount}
        />
      )}
    </div>
 },
  onChange: function(event, games) {
    this.setState({games: games});
  }
});
