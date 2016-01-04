var React = require('react');
var Badge = require('./button-badge');

module.exports = React.createClass({
  render: function() {
    return <div className="col-sm-6 col-md-4">
      <div className="gameCatagory">
        <img src={this.props.imageUrl} alt="..."></img>
        <div className="caption">
          <h3>{this.props.title}</h3>
          <p>{this.props.description}</p>
          <p>
            <Badge title={this.props.title} number={this.props.number} header={this.props.header}/>
          </p>
        </div>
      </div>
    </div>
  }
});
