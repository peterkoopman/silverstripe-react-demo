import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import '../styles/main.css';

const container = document.getElementById('productapp');

createRoot(container!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
