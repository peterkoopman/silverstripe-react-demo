import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import '../styles/main.css';

createRoot(document.getElementById('productapp')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
