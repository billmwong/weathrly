import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { autoRehydrate, persistStore } from 'redux-persist';
import App from './components/App';
import reducer from './reducers/rootReducer';
import './stylesheets/styles.css';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  compose(
    applyMiddleware(thunk),
    autoRehydrate(),
  ),
);
/* eslint-enable */

persistStore(store);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('container'),
);
