import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './store/reducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');
const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename={baseUrl}>
      <App />
    </BrowserRouter>
  </Provider>,
  rootElement);

registerServiceWorker();

