import React from 'react';
import {render} from 'react-dom';
import Routes from './Routes';

const rootEle = document.getElementById('app'); //eslint-disable-line

render(<Routes />, rootEle);
