import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

import log from './logger';
const _log = log('app');
console.debug('index', _log);

_log.info('Starting up');

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

axios.interceptors.request.use(
    (request) => {
        _log.debug(request);
        return request;
    },
    (error) => {
        _log.error(error);
        return Promise.reject(error);
    },
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
