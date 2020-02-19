import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './components/App/serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers'

const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
    <Provider store = {store}>
        <App/>
    </Provider>,
     document.getElementById('root')
);

serviceWorker.unregister();
