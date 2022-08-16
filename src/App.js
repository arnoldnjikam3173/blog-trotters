import './styles/App.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './About';
import Home from './Home';
import Blog from './Blog';
import ErrorPage from './ErrorPage';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import BlogDetails from './components/Blog/BlogDetails';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/about' element={ <About/> } />
              <Route path='/blog' element={ <Blog/>} />
              <Route path='/blog/:title' element={ <BlogDetails />} />
              <Route path='*' element={ <ErrorPage/>} />
            </Routes>
        <Footer/>
      </BrowserRouter>  
    </>
  );
}

export default App;
