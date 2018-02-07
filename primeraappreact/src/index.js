import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Principal from './principal'

import registerServiceWorker from './registerServiceWorker';

//<App />
ReactDOM.render(<Principal />,
  document.getElementById('root')
);
registerServiceWorker();
