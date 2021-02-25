import * as React from 'react';
import { useAction, useSelector, useStore } from 'redux-zero/react';
import BaseComponent from '../../components/BaseComponent';

import './index.scss';

const Home: React.FC = () => {
  const store = useStore();
  console.log(store.getState());
  const count = useSelector(({count}) => count);
  const increase = useAction(({count}) => ({
    count: count + 1
  }));
  return (
    <div>
      this is Home. <br/>
      The Count is {count}
      <button onClick={increase}>+</button>
      <BaseComponent />
    </div>
  );
}

export default Home;
