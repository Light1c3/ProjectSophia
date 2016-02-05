var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({
  render: function() {
    return <Link to={"game/" + this.props.Id} className="btnBadge">
      <button className="btn btn-Default" type="btnBadge">
        <span className="badgeHeader">
          Benchmarks
        </span>
        <span className="badge">
          {this.props.MarkCount}
        </span>
      </button>
    </Link>
  }
});
