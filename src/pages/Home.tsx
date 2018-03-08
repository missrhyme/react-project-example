import * as React from 'react';
import {Component} from 'react';
// import {connect} from 'redux-zero/react';
import BaseComponent from '../components/BaseComponent';

// import {increment, decrement, query} from '../actions';

// const mapToProps = ({count}) => ({count});

// const Count = connect(mapToProps)(({count}) => <p>{count}</p>);

interface IPropType {

}

interface IStateType {

}

export default class Home extends Component<IPropType, IStateType> {
  public render() {
    return (
      <div>
        this is Home
        <BaseComponent />
      </div>
    );
  }
}
