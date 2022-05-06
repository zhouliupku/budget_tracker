import React from 'react';
import ReactDOM from 'react-dom';

import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context';

import App from './App';

import './index.css';

ReactDOM.render(
    <SpeechProvider appId='3d53e975-eaee-4155-bd99-beaa943d31f3' language='en-US'>
        <Provider>
        <App />
    </Provider>
    </SpeechProvider>,
    
    document.getElementById('root')
);