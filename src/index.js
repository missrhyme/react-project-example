import React from 'react';
import {render} from 'react-dom';
import Routes from './routes';

const rootEle = document.getElementById('app'); //eslint-disable-line

render(<Routes />, rootEle);
