import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import { isIOS } from "react-device-detect";
import 'add-to-homescreen/dist/style/addtohomescreen.css';
require('add-to-homescreen');

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();

if(isIOS)
{
    window.addToHomescreen();
}
