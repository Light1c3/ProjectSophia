var React = require('react');
var Header = require('./header');
var GameList = require('./game-list');

module.exports = React.createClass({
  render: function () {
    return <div>
      <Header />
      {this.content()}
    </div>
  },
  content: function() {
    if(this.props.children) {
      return this.props.children
    } else {
      return <GameList />
    }
  }
});
