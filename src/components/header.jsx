var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({
  render: function() {
    return <div className="row panel panel-defualt">
      <div className="col-md-8 col-md-offset-2">
        <h2 className="text-center">
          <Link to="/">Welcome to Project Sophia</Link>
        </h2>
        <div className="input-group searchBar">
          <input type="text" className="form-control" />
          <span className="input-group-btn">
            <button className="btn btn-default" type="button">
              Search
            </button>
          </span>
        </div>
    </div>
  </div>
  }
})
