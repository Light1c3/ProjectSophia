var React = require('react');
var Reflux = require('reflux');
var Benchmark = require('./benchmark');
var NewBench = require('./new-benchmark');
var Bootstrap = require('react-bootstrap');
var BenchmarkStore = require('../stores/benches-store');
var Actions = require('../actions');

var Modal = Bootstrap.Modal;
var Button = Bootstrap.Button;

module.exports = React.createClass({
  mixins: [
    Reflux.listenTo(BenchmarkStore, 'onChange')
  ],
  close() {
    this.setState({showModal: false});
  },
  open() {
    this.setState({ showModal: true });
  },
  getInitialState: function() {
    return {
      showModal: false,
      benches: []
    }
  },
  componentWillMount: function() {
    Actions.getBenches();
  },
  render: function() {
    return <div>
      {this.renderBenches()}
      <div className="text-center">
        <NewBench handleSub={this.handleSubmit} show={this.state.showModal} onHide={this.close} CPU={this.state.CPU}/>
      </div>
      <Button
        bsSize="large"
        onClick={this.open}
      >
        Create New Benchmark
      </Button>
    </div>
  },
  renderBenches: function() {
    return this.state.benches.map(function(benchmark) {
      return <Benchmark Benches={benchmark} className="list-group-item" key={benchmark.Id}/>
    });
  },
  onChange: function(event, benches) {
    this.setState({benches: benches});
  }
})
