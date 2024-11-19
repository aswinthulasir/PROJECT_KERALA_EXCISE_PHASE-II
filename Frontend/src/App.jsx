import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Section1 from './Section1';
import Login from './pages/Login';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Admin from './Admin';
import Leaders from './pages/About';
import Gallery from './pages/Gallery';

function App() {
  

  return (
    <>
    <Routes>
     <Route path='/' element={<Section1 />} />
     <Route path='login' element={<Login />} />
     <Route path='/admin-dashboard' element={<Admin />} />
     <Route path='/about' element={<Leaders />}></Route>
     <Route path='/gallery' element={<Gallery />}></Route>
     
     
     
     
    </Routes>
      
    </>
  )
}

export default App
