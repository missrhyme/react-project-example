import * as React from 'react';
import {render} from 'react-dom';
import {Provider} from 'redux-zero/react';
import Routes from './Routes';

import store from './store';

const rootEle = document.getElementById('app');

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  rootEle
);
