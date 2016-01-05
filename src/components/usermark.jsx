var React = require('react');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var List = require('./list');
var GameList = require('./gamecat');
var Router = require('react-router');
var Link = Router.Link;
var rootUrl = 'https://luminous-heat-9993.firebaseio.com//';

module.exports = React.createClass({
  mixins: [ ReactFire ],
  getInitialState: function() {
    return {
      items: {},
      loaded: false
    }
  },
  componentWillMount: function() {
    this.fb = new Firebase(rootUrl + 'games/' + this.props.params.id );
    this.bindAsObject(this.fb, 'items');
    this.fb.on('value', this.handleDataLoaded);
  },
  render: function() {
    return <div className={"content " + (this.state.loaded ? 'loaded' : '')}>
      <List items={this.state.items} />
      <div className="text-center">
        <Link to="/createbench">New Benchmark</Link>
      </div>
    </div>
  },
  handleDataLoaded: function(){
    this.setState({loaded: true});
  }
});
