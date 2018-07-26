import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import Routes from './Routes';

const App = hot(module)(Routes);

ReactDOM.render(<App />, document.getElementById('app'));
