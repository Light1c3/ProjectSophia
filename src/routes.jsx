var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Main = require('./components/main');
var GameMark = require('./components/usermark');

module.exports = (
  <Router>
    <Route path="/" component={Main}>
      <Route path="games/:id" component={GameMark} />
    </Route>
  </Router>
)
