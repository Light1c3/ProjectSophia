var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({
  render: function() {
    return <div>
        <Link to="/" className="navbar-brand">
          <h2 className="text-center">
            Welcome to Project Sophia
          </h2>
        </Link>
        <div className="input-group searchBar">
          <input type="text" className="form-control" />
          <span className="input-group-btn">
            <button className="btn btn-default" type="button">
              Search
            </button>
          </span>
        </div>
    </div>
  }
})
