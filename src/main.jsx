import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { MainContextProvider } from './context/useMainContext.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainContextProvider>
      <App />
    </MainContextProvider>
  </React.StrictMode>
);
