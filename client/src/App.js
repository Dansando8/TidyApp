
import './App.css';
import React from 'react';
import  {BrowserRouter, Routes, Route} from 'react-router-dom'
import Qr_code_page from './pages/Qr_code_page';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import NavBar from './navigation/NavBar';
import Reward from './pages/Reward';
import Tasks from './pages/Tasks';



function App() {
  return (
    <div className="App">
    <NavBar></NavBar>
    <BrowserRouter>
      <Routes>
        <Route path='/homepage' element={<HomePage />} />
        <Route path='/qrcode' element={<Qr_code_page />} /> 
        <Route path='/dashboard' element={<Dashboard></Dashboard>} />
        <Route path='/reward/:id' element={<Reward></Reward>}></Route>
        <Route path='/tasks' element={<Tasks></Tasks>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
