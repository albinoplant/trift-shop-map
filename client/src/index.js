import React from 'react'
import { render } from 'react-dom'
import './index.css'
import App from './components/App/App'
import { Provider } from 'react-redux'
import configureStore from './store'
import 'babel-polyfill'

const store = configureStore()

render(
    <Provider store = {store}>
        <App />
    </Provider>,
     document.getElementById('root')
);