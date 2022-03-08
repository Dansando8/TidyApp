
import './App.css';
import React from 'react';
import  {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import NavBar from './navigation/NavBar';
import Reward from './pages/Reward';
import Tasks from './pages/Tasks';
import Task from './pages/Task'
import QRcode from './pages/QRcode';
import ExecTask from './pages/ExecTask';
import Register from './pages/Register';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import apiService from './apiService';
import Profile from './pages/Profile';



function App() {
  return (
    
    
    <div className="App">
      <NavBar></NavBar>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/dashboard/:id' element={<Dashboard></Dashboard>} />
          <Route path='/reward/:id' element={<Reward></Reward>}></Route>
          <Route path='/tasks' element={<Tasks></Tasks>}></Route>
          <Route path='/tasks/:id' element={<Task></Task>}></Route>
          <Route path='/tasks/qrcode/:id' element={<QRcode></QRcode>}></Route>
          <Route path='/tasks/exectask/:points' element={<ExecTask></ExecTask>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/*' element={<PageNotFound></PageNotFound>}></Route>
          <Route path='/profile/:id' element={<Profile></Profile>}></Route>
        </Routes>
      </BrowserRouter>
      </div>
   
  );
}

export default App;
