
import './App.css';
import React from 'react';
import  {BrowserRouter, Routes, Route} from 'react-router-dom'
import Qr_code_page from './pages/Qr_code_page';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import Image from './pages/Image.js'


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Image></Image>
      <Routes>
        <Route path='/homepage' element={<HomePage />} />
        <Route path='/qrcode' element={<Qr_code_page />} /> 
        <Route path='/' element={<Dashboard></Dashboard>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
