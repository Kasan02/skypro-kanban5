import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './app.css'; // Импортируем стили для всего приложения

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
