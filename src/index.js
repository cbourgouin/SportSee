import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './pages/App/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/12' />} />
        <Route path='/:id' element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
