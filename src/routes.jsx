var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Main = require('./components/main');
var Benchmarks = require('./components/benchmark-list');

module.exports = (
  <Router>
    <Route path="/" component={Main}>
      <Route path="game/:id" component={Benchmarks} />
    </Route>
  </Router>
)
