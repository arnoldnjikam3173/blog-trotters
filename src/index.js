import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './About';
import Home from './App';
import Blog from './Blog';
import ErrorPage from './ErrorPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/about' element={ <About/> } />
              <Route path='/blog' element={ <Blog/>} />
              <Route path='*' element={ <ErrorPage/>} />
            </Routes>
  </BrowserRouter>
);

