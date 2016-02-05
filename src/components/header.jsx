var React = require('react');
var Router = require('react-router');
var Bootstrap = require('react-bootstrap');

var Button = Bootstrap.Button;
var Link = Router.Link;
var Input = Bootstrap.Input;

module.exports = React.createClass({
  getInitialState() {
    return {
      searchedItem: ''
    }
  },
  search() {
    this.setState({searchedItem: ''});
    window.location.assign("#/game/" + this.getGameTitleFromId(this.state.searchedItem));
    this.forceUpdate()

  },
  getGameTitleFromId: function(gameId) {
    switch (gameId) {
      case "Fallout 4": return "1";
      case "League of Legends": return "2";
      case "Battlefield 4": return "3";
      case "Star Wars Battlefront": return "4";
      case "The Witcher 3": return "7";
    }
  },
  render: function() {
    return <div className="row panel panel-defualt">
      <div className="col-md-8 col-md-offset-2">
        <h2 className="text-center">
          <Link to="/">Welcome to Project Sophia</Link>
        </h2>
        <div className="input-group searchBar">
          <Input type="text" value={this.state.searchedItem} className="standalone" onChange={this.handleChange} ref="searchInput" />
          <span className="input-group-btn">
              <Button onClick={this.search}>
                Search
              </Button>
          </span>
        </div>
    </div>
  </div>
  },
  handleChange: function(evt) {
    this.setState({
      searchedItem: evt.target.value
    });
  },
})
