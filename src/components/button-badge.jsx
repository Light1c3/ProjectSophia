var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({
  render: function() {
    return <button className="btn btn-Default" type="button">
      <Link to={"games/" + this.props.id} className="btnBadge">
        {this.props.header}
      </Link>
      <span className="badge">
        {this.props.number}
      </span>
    </button>
  }
});
