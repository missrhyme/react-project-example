import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Home from './pages/Home';
import Test from './pages/Test';

const Routes = () => (
  <BrowserRouter basename=''>
    <div>
      <Route path='/' exact component={Home} />
      <Route path='/test' component={Test} />
    </div>
  </BrowserRouter>
);

export default Routes;
