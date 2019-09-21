import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/*import './nav-css/nav.css'*/
import App from './App';
import * as serviceWorker from './serviceWorker';
import './w3.css';
import './App.css';
import './font-awesome/css/all.css';

import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
