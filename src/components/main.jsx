var React = require('react');
var Header = require('./header');
var GameList = require('./game-list');
var Options = require('./game-options');

module.exports = React.createClass({
  render: function () {
    return <div className="row panel panel-defualt">
      <div className="col-md-8 col-md-offset-2">
        <Header />
        {this.content()}
      </div>
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
