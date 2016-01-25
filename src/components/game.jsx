var React = require('react');
var Badge = require('./button-badge');

module.exports = React.createClass({
  render: function() {
    return <div className="col-sm-6 col-md-4">
      <div className="gameCatagory">
        <img src={this.props.ImageUrl} alt="..."></img>
        <div className="caption">
          <h3>{this.props.Title}</h3>
          <p>{this.props.Description}</p>
          <p>
            <Badge Id={this.props.Id} MarkCount={this.props.MarkCount}/>
          </p>
        </div>
      </div>
    </div>
  }
});
