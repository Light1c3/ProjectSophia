var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({
  render: function() {
    return <Link to={"games/" + this.props.id} gameID={this.props.id} className="btnBadge">
      <button className="btn btn-Default" type="btnBadge">
        <span className="badgeHeader">
          {this.props.header}
        </span>
        <span className="badge">
          {this.props.number}
        </span>
      </button>
    </Link>
  }
});
