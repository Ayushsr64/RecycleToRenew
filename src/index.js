import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from 'firebase/app';
import ReactDOM from 'react-dom';

import App from './App';
import Login from './components/Pages/Login';
import { BrowserRouter as Router } from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
const root = createRoot(document.getElementById('root'));
root.render(<App />);




root.render(
  <>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
   
  </>
  );
  




