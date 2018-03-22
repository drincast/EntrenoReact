import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Lista from './componentes/lista/lista';

ReactDOM.render(
  <Lista />,
  document.getElementById('root')
);
registerServiceWorker();
