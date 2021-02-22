import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import {
  Provider,
} from 'react-redux';
import store from './store/store';


console.log('LOG GET STATE: ', store.getState());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
