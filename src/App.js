import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/sign-up' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
