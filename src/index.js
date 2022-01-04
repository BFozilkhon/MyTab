import React from 'react';
import ReactDOM from 'react-dom';
import Context from './Context/context';
import './index.css';
import Root from './Root';

ReactDOM.render(
  <React.StrictMode>
    <Context>
      <Root />
    </Context>
  </React.StrictMode>,
  document.getElementById('root')
);
