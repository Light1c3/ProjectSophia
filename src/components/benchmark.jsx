var React = require('react');

module.exports = React.createClass({
  render: function() {
    return <div className="row panel panel-default">
      <div className="jumbotron col-md-3 col-md-offset-0">
        <h1>{this.props.Benches.Username}</h1>
        <h1>{this.props.Benches.GameName}</h1>
      </div>
      <div className="col-md-5 col-md-offset-0">
        <h3>
          CPU: {this.props.Benches.CPU}
          <br />
          GPU: {this.props.Benches.GPU}
          <br />
          RAM: {this.props.Benches.RAM}
        </h3>
      </div>
      <div className="col-md-3 col-md-offset-1">
        <h3>
          Avrage: {this.props.Benches.AvgFPS}
          <br />
          Max:    {this.props.Benches.MaxFPS}
          <br />
          Min:    {this.props.Benches.MinFPS}
        </h3>
      </div>
    </div>
  }
});
