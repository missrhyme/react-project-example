import store from '../store';

export const increment = () => {
  store.setState({
    count: store.getState().count + 1
  });
};

export const decrement = () => {
  store.setState({
    count: store.getState().count - 1
  });
};

export const query = () => {
  fetch('/query')
    .then(res => res.json())
    .then(res => store.setState({count: res.data}));
};
