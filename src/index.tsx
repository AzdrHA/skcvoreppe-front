import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {BaseRouter} from '@app/router/BaseRouter';
import '@styles/app.scss';
import '@styles/tailwind.css';
import './i18n';
import {Provider} from 'react-redux';
import {store} from '@app/reducer/store';

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <BaseRouter/>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
    document.getElementById('_skcvoreppe'),
);
