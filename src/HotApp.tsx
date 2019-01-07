import * as React from 'react';
import {hot} from 'react-hot-loader';

import Routes from './Routes';

const App = () => <Routes />;

const HotApp = hot(module)(App);

export default HotApp;
