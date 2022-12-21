import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Signup from './components/Signup/Signup';
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/sign-up' element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
