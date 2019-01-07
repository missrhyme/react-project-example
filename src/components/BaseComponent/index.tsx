import * as React from 'react';
import {Component} from 'react';
import './index.scss';

export default class BaseComponent extends Component {
  public render() {
    return ([
      <p key={1}>this is component1</p>,
      <p key={2}>this is component2</p>
    ]);
  }
}
