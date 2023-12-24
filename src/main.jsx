import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import CategogryContextProvider from './Context/ShopContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CategogryContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CategogryContextProvider>
  </React.StrictMode>
)
