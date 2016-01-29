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
    console.log(this.state.submitCheck);
    this.setState({submitCheck: true});
    this.setState({showModal: false});
  },
  open() {
    this.setState({ showModal: true });
  },
  getInitialState: function() {
    return {
      showModal: false,
      submitCheck: false,
      benches: []
    }
  },
  componentWillMount: function() {
    Actions.getBenchmarks(this.props.params.id);
  },
  render: function() {
    return <div>
      {this.renderBenches()}
      <div className="text-center">
        <NewBench show={this.state.showModal} subChcek={this.state.submitCheck} onHide={this.close} id={this.props.params.id}/>
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
    return <div>
      {this.state.benches.map((benchmark) =>
        <Benchmark Benches={benchmark} className="list-group-item" key={benchmark.Id} />
      )}
    </div>
  },
  onChange: function(event, benches) {
    this.setState({benches: benches});
  }
})
