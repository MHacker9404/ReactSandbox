import React from 'react';
import ReactDOM from 'react-dom';
import css from './index.module.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from './axios';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
