import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import registerServiceWorker from './registerServiceWorker';
import TagManager from 'react-gtm-module';
import { googleTagId } from 'meta-tags.js';

const tagManagerArgs = {
   gtmId: {googleTagId},
};

TagManager.initialize(tagManagerArgs)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
