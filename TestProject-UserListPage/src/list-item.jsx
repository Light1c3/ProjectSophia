var React = require('react');
var Firebase = require('firebase');
var rootUrl = 'https://blistering-torch-4253.firebaseio.com/';

module.exports = React.createClass({
  getInitialState: function() {
    return {
      CPU: this.props.item.CPU,
      GPU: this.props.item.GPU,
      RAM: this.props.item.RAM,
      avgFPS: this.props.item.avgFPS,
      minFPS: this.props.item.minFPS,
      maxFPS: this.props.item.maxFPS,
    }
  },
  componentWillMount: function() {
    this.fb = new Firebase(rootUrl + 'items/' + this.props.item.key);
  },
  render: function() {
    return <div className="row panel panel-default">
      <div className="jumbotron col-md-3 col-md-offset-0">
        <h1>{this.state.avgFPS}</h1>
      </div>
      <div className="col-md-5 col-md-offset-0">
        <h3>
          CPU: {this.state.CPU}
          <br />
          GPU: {this.state.GPU}
          <br />
          RAM: {this.state.RAM}
        </h3>
      </div>
      <div className="col-md-3 col-md-offset-1">
        <h3>
          Avrage: {this.state.avgFPS}
          <br />
          Max:    {this.state.maxFPS}
          <br />
          Min     {this.state.minFPS}
        </h3>
      </div>
    </div>
  },
  changesButtons: function() {
    if(!this.state.textChanged) {
      return null
    } else {
      return [
        <button
          className="btn btn-default"
          onClick={this.handleSaveClick}
          >
          Save
        </button>,
        <button
          onClick={this.handleUndoClick}
          className="btn btn-default"
          >
          Undo
        </button>
      ]
    }
  },
  handleSaveClick: function() {
    this.fb.update({text: this.state.text});
    this.setState({textChanged: false});
  },
  handleUndoClick: function() {
    this.setState({
      text: this.props.item.text,
      textChanged: false
    });
  },
  handleTextChange: function(event) {
    this.setState({
      text: event.target.value,
      textChanged: true
    });
  },
  handleDoneChange: function(event) {
    var update = {done: event.target.checked}
    this.setState(update);
    this.fb.update(update);
  },
  handleDeleteClick: function() {
    this.fb.remove();
  }
});
