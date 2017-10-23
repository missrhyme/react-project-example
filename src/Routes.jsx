import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {Provider} from 'redux-zero/react';

import store from './store';

import Home from './pages/Home';
import Test from './pages/Test';

const Routes = () => (
  <Provider store={store}>
    <BrowserRouter basename=''>
      <div>
        <Route path='/' exact component={Home} />
        <Route path='/test' component={Test} />
      </div>
    </BrowserRouter>
  </Provider>
);

export default Routes;
