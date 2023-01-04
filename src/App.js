import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import ComposeMail from './components/ComposeMail/ComposeMail';
import SingleMail from './components/SingleMail/SingleMail';
import AllSentMail from './components/AllSentMail/AllSentMail';
import AllUnreadMail from './components/AllUnreadMail/AllUnreadMail';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-up' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/compose' element={<ComposeMail />} />
        <Route path='/inbox/:id' element={<SingleMail />} />
        <Route path='/sent-mail' element={<AllSentMail />} />
        <Route path='/unread-mail' element={<AllUnreadMail />} />

      </Routes>
    </div>
  );
}

export default App;
