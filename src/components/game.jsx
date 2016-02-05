var React = require('react');
var Badge = require('./button-badge');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      originalDesc: this.props.Description,
      shortDesc: null
    }
  },
  render: function() {
    return <div className="col-sm-6 col-md-4">
      <div className="gameCatagory">
        <img src={this.props.ImageUrl} alt="..."></img>
        <div className="caption">
          <h3>{this.props.Title}</h3>
          <p>{this.state.shortDesc}</p>
          <p>
            <Badge Id={this.props.Id} MarkCount={this.props.MarkCount}/>
          </p>
        </div>
      </div>
    </div>
  },
  componentWillMount: function() {
    this.trimDescription()
  },
  trimDescription() {
    var descLength = 200
    var string = this.state.originalDesc

    var trimmedString = string.substring(0, descLength);

    trimmedString = trimmedString.substring(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
    trimmedString = trimmedString.concat("...")
    this.setState({shortDesc: trimmedString});
  }
});
