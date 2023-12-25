import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import BlogPage from './pages/Blogs';
import Layout from './pages/Layout';
import Board from './pages/Tictac';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path="/" element={ <Layout />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage/>} />
        <Route path="/tictac" element={<Board/>} />
        <Route path="/app" element={<App/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
