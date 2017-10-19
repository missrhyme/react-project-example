import React, {Component} from 'react';
import './index.scss';

export default class BaseComponent extends Component {
  render() {
    return ([
      <p key={1}>this is a component1</p>,
      <p key={2}>this is a component2</p>
    ]);
  }
}
