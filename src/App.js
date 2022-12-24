import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import ComposeMail from './components/ComposeMail/ComposeMail';
function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-up' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/compose' element={<ComposeMail />} />
      </Routes>
    </div>
  );
}

export default App;
