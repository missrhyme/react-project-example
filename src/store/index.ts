import * as createStore from 'redux-zero';

const initialState = {
  count: 1
};

const store = (createStore as any)(initialState);

export default store;
