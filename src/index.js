import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './App';
import { ContextProvider } from './SocketContext'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
