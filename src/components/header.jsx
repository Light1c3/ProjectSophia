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
    console.log("Searched");
  },
  render: function() {
    return <div className="row panel panel-defualt">
      <div className="col-md-8 col-md-offset-2">
        <h2 className="text-center">
          <Link to="/">Welcome to Project Sophia</Link>
        </h2>
        <div className="input-group searchBar">
          <Input type="text" className="form-control" onChange={this.handleChange()} value={this.state.Username} />
          <span className="input-group-btn">
            <Button onClick={this.search}>
              Search
            </Button>
          </span>
        </div>
    </div>
  </div>
  },
  handleChange: function() {
    var state = {};
    state[name] = e.target.value;
    this.setState(state);
    var namestyle  = name + 'Style';
    this.setState(this.validationState(namestyle, e));
  },
})
