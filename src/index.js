import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Faas from './components/Faas';

import './index.css';

const root = document.getElementById('root');
ReactDOM.render((
  <Faas host="http://localhost:3001" appId="test_access112">
    <App/>
  </Faas>
), root);
