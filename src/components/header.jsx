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
    console.log(this.state.searchedItem);
    this.setState({searchedItem: ''});
    location.reload()
    console.log("New Page");

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
            <Link to={"games/" + this.state.searchedItem}>
              <Button onClick={this.search}>
                Search
              </Button>
            </Link>
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
