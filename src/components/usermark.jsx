var React = require('react');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var List = require('./list');
var GameList = require('./gamecat');
var Router = require('react-router');
var Bootstrap = require('react-bootstrap');
var NewBench = require('./new-benchmark');
var Api = require('../utils/api');
var Link = Router.Link;
var rootUrl = 'https://luminous-heat-9993.firebaseio.com//';

var Modal = Bootstrap.Modal;
var Button = Bootstrap.Button;

module.exports = React.createClass({
  mixins: [ ReactFire ],
  getInitialState: function() {
    return {
      benchmarks: [],
      items: {},
      loaded: false,
      showModal: false,
      CPU: 'i7 3770K',
      GPU: '',
      RAM: '',
      avgFPS: '',
      minFPS: '',
      maxFPS: ''
    }
  },
  close() {
    this.setState({showModal: false});
  },
  open() {
    this.setState({ showModal: true });
  },
  componentWillMount: function() {
    Api.get('games');
    this.fb = new Firebase(rootUrl + 'games/' + this.props.params.id );
    this.bindAsObject(this.fb, 'items');
    this.fb.on('value', this.handleDataLoaded);
  },
  render: function() {
    return <div className={"content " + (this.state.loaded ? 'loaded' : '')}>
      <List items={this.state.items} />
      <div className="list-group">
        Games from DB
        {this.renderBenchmarks()}
      </div>
      <div className="text-center">
        <Button
          bsSize="large"
          onClick={this.open}
        >
          Create New Benchmark
        </Button>
        <NewBench handleSub={this.handleSubmit} show={this.state.showModal} onHide={this.close} CPU={this.state.CPU}/>
      </div>
    </div>
  },
  handleDataLoaded: function(){
    this.setState({loaded: true});
  },
  handleSubmit: function() {
    console.log("Outter Flag");
    this.setState({showModal: false});
  },
  renderBenchmarks: function() {
    this.state.benchmarks.maps(function(game){
      return <li>
        {game.Title}
      </li>
    })
  }
});
