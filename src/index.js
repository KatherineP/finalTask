import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { ErrorBoundary } from './component/index';
import { BrowserRouter } from 'react-router-dom';

import App from './component/app';

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <BrowserRouter basename={process.env.PUBLIC_URL + '/#/'}>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
);
