import * as React from 'react';
import {render} from 'react-dom';
import Routes from './Routes';

const rootEle = document.getElementById('app');

render(<Routes />, rootEle);
