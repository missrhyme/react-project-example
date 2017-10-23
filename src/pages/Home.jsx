import React, {Component} from 'react';
import {connect} from 'redux-zero/react';
import BaseComponent from '../components/BaseComponent';

import {increment, decrement, query} from '../actions';

const mapToProps = ({count}) => ({count});

const Count = connect(mapToProps)(({count}) => <p>{count}</p>);

export default class Home extends Component {
  render() {
    return (
      <div>
        this is Home
        <Count />
        <button onClick={increment}>+++</button>
        <button onClick={decrement}>---</button>
        <button onClick={query}>???</button>
        <BaseComponent />
      </div>
    );
  }
}
