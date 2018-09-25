import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'

import registerServiceWorker from './registerServiceWorker';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

ReactDOM.render(
    <Router>
    <App/>
    </Router>


    , document.getElementById('root'));
registerServiceWorker();
