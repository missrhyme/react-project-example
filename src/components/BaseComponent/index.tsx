import * as React from 'react';
import './index.scss';

const BaseComponent: React.FC = () => {
  return (
    <>
      <p key={1}>this is component1</p>
      <p key={2}>this is component2</p>
    </>
  );
}

  export default BaseComponent
