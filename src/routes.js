import React, {Component} from 'react';
import {Router, Route, browserHistory} from 'react-router';

import Home from './pages/Home';

const routes = (
  <Route path="/" component={Home} />
);

export default class Routes extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        {routes}
      </Router>
    );
  }
}
