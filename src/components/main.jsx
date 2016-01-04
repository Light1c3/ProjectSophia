var React = require('react');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var Header = require('./header');
var GameList = require('./game-list');
var Options = require('./game-options');
var List = require('./list');
var rootUrl = 'https://luminous-heat-9993.firebaseio.com//';

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
