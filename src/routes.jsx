var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Main = require('./components/main');
var Topic = require(./);

module.exports = (
  <Router>
    <Route path="/" component={Main}>
      <Route path="games/2" component={Topic} />
    </Route>
  </Router>
)
