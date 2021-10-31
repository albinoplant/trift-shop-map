import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './components/App/serviceWorker';

render(
    <App />,
  document.getElementById("root")
);

serviceWorker.unregister();
