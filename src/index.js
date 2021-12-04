import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from './context/context';
import App from './App';
import './index.css';
import {SpeechProvider} from '@speechly/react-client';


ReactDom.render(
    <SpeechProvider appId="bd8e5c2d-d093-4d83-b893-bf2a4c15c0a8" language="en-US">
    <Provider>
        <App />
    </Provider>
    </SpeechProvider>,
     document.getElementById('root'));
