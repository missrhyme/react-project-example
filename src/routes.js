import React, {Component} from 'react';
import {Router, Route, browserHistory} from 'react-router';

import Home from './pages/Home';

export default class Routes extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home} />
      </Router>
    );
  }
}
